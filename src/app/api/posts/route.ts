import { NextRequest, NextResponse } from 'next/server';

import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

import { ExplorePostsProps } from '@/app/page';

import PostService from '../../../../prisma/services/PostServices';
import prisma from '@/database/prisma';

export async function GET() {
  try {
    const today = new Date();

    const currentPost = await prisma.post.findFirst({
      where: {
        taggedDate: {
          lt: today,
        },
      },
      orderBy: {
        taggedDate: 'desc',
      },
    });

    const prevPost = await prisma.post.findFirst({
      where: {
        taggedDate: {
          lt: currentPost?.taggedDate,
        },
      },
      orderBy: {
        taggedDate: 'desc',
      },
    });

    const postProps: ExplorePostsProps = {
      currentPost: currentPost!,
      prevPostId: prevPost?.id,
    };

    return NextResponse.json(postProps, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `${error}` })
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const body = await req.json();

  if (session) {
    const trimmedContent = body.content.trim();

    if (trimmedContent === '') {
      return NextResponse.json(
        { error: 'Posts cannot be blank' },
        { status: 400 }
      );
    }

    const newPost = await prisma.post.create({
      data: {
        content: trimmedContent,
        taggedDate: body.taggedDate,
        published: body.published,
        author: { connect: { email: session!.user!.email! } },
      },
    });

    const decoratedPost = new PostService(newPost!);
    const prevPost = await decoratedPost.prevPost();
    const nextPost = await decoratedPost.nextPost();

    const postProps: ExplorePostsProps = {
      currentPost: newPost!,
      prevPostId: prevPost?.id,
      nextPostId: nextPost?.id,
    };

    return NextResponse.json(postProps, { status: 201 });
  } else {
    return NextResponse.json({ error: 'Unauthorized action' }, { status: 401 });
  }
}
