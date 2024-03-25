import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/database/prisma';
import { ExplorePostsProps } from '@/components/ExplorePosts/ExplorePosts';
import PostService from '../../../../../prisma/services/PostService';

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  const postId = parseInt(route.params.id);

  if (postId < 1) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  try {
    const currentPost = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    const decoratedPost = new PostService(currentPost!);
    const prevPost = await decoratedPost.prevPost();
    const nextPost = await decoratedPost.nextPost();

    const postProps: ExplorePostsProps = {
      currentPost: currentPost!,
      prevPostId: prevPost?.id,
      nextPostId: nextPost?.id,
    };

    return NextResponse.json(postProps, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
