import { NextRequest, NextResponse } from 'next/server';
import { PostsBatchProps } from '@/components/AllPosts/AllPosts';
import prisma from '@/database/prisma';

export async function GET(req: NextRequest) {
  console.log('batch route initiated...');
  const today = new Date();
  const url = new URL(req.url);
  const cursorId = url.searchParams.get('cursorId');
  const action = url.searchParams.get('action');

  if (action) {
    try {
      const postBatch = await prisma.post.findMany({
        take: action === 'next' ? 5 : -5,
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
            gt: postBatch[postBatch.length - 1].taggedDate,
          },
        },
        orderBy: {
          taggedDate: 'desc',
        },
      });

      const prevPost = await prisma.post.findFirst({
        where: {
          taggedDate: {
            lt: postBatch[0].taggedDate,
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

      console.log('POST BATCH PROPS: ', postBatchProps);

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

    const nextPost = await prisma.post.findFirst({
      where: {
        taggedDate: {
          gt: today,
        },
      },
      orderBy: {
        taggedDate: 'desc',
      },
    });

    const postBatchProps: PostsBatchProps = {
      postsBatch: postBatch,
      nextPostId: nextPost?.id,
    };

    return NextResponse.json(postBatchProps, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

// const url = new URL(req.url);

// const take = url.searchParams.get('take');
// const lastCursor = url.searchParams.get('lastCursor');

// let result = await prisma.post.findMany({
//   take: take ? parseInt(take as string) : 10,
//   ...(lastCursor && {
//     skip: 1,
//     cursor: {
//       id: parseInt(lastCursor as string),
//     },
//   }),
//   orderBy: {
//     taggedDate: 'desc',
//   },
// });

// if (result.length == 0) {
//   return new Response(
//     JSON.stringify({
//       data: [],
//       metaData: {
//         lastCursor: null,
//         hasNextPage: false,
//       },
//     }),
//     { status: 200 }
//   );
// }

// const lastPostInResults: any = result[result.length - 1];
// const cursor: any = lastPostInResults.id;

// const nextPage = await prisma.user.findMany({
//   // Same as before, limit the number of events returned by this query.
//   take: take ? parseInt(take as string) : 7,
//   skip: 1, // Do not include the cursor itself in the query result.
//   cursor: {
//     id: cursor,
//   },
// });

// const data = {
//   data: result,
//   metaData: {
//     lastCursor: cursor,
//     hasNextPage: nextPage.length > 0,
//   },
// };
