import { NextRequest, NextResponse } from 'next/server';
import { PostsBatchProps } from '@/components/AllPosts/AllPosts';
import prisma from '@/database/prisma';

export async function GET(req: NextRequest) {
  const today = new Date();
  const url = new URL(req.url);
  const cursorId = url.searchParams.get('cursorId');
  const action = url.searchParams.get('action');

  if (action) {
    try {
      const postBatch = await prisma.post.findMany({
        take: action === 'prev' ? 5 : -5,
        skip: 1,
        cursor: {
          id: parseInt(cursorId as string),
        },
        orderBy: {
          taggedDate: 'desc',
        },
      });

      const nextPost = await prisma.post.findFirst({
        where: {
          taggedDate: {
            gt: postBatch[0].taggedDate,
          },
        },
        orderBy: {
          taggedDate: 'asc',
        },
      });

      const prevPost = await prisma.post.findFirst({
        where: {
          taggedDate: {
            lt: postBatch[postBatch.length - 1].taggedDate,
          },
        },
        orderBy: {
          taggedDate: 'desc',
        },
      });

      const postBatchProps: PostsBatchProps = {
        prevPostId: prevPost?.id,
        postsBatch: postBatch,
        nextPostId: nextPost?.id,
      };

      return NextResponse.json(postBatchProps, { status: 201 });
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const postBatch = await prisma.post.findMany({
      take: 5,
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
          lt: postBatch[postBatch.length - 1].taggedDate,
        },
      },
      orderBy: {
        taggedDate: 'desc',
      },
    });

    const postBatchProps: PostsBatchProps = {
      prevPostId: prevPost?.id,
      postsBatch: postBatch,
    };

    return NextResponse.json(postBatchProps, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
