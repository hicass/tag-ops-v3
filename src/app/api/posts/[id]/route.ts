import prisma from '@/database/prisma';
import { Post } from '@prisma/client';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

import { ExplorePostsProps } from '@/components/ExplorePosts/ExplorePosts';
import PostService from '../../../../../prisma/services/PostService';

import { NextRequest, NextResponse } from 'next/server';

const buildPostProps = async (post: Post) => {
  const decoratedPost = new PostService(post);
  const prevPost = await decoratedPost.prevPost();
  const nextPost = await decoratedPost.nextPost();

  const postProps: ExplorePostsProps = {
    currentPost: post,
    prevPostId: prevPost?.id,
    nextPostId: nextPost?.id,
  };

  return postProps;
};

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  const postId = parseFloat(route.params.id);

  if (postId < 1 || postId % 1 !== 0) {
    return NextResponse.json({ error: 'Invalid Id' }, { status: 400 });
  }

  try {
    const currentPost = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (currentPost !== null) {
      const postProps = await buildPostProps(currentPost);
      return NextResponse.json(postProps, { status: 201 });
    } else {
      const today = new Date();

      const latestPost = await prisma.post.findFirst({
        where: {
          taggedDate: {
            lt: today,
          },
        },
        orderBy: {
          taggedDate: 'desc',
        },
      });

      if (latestPost !== null) {
        const postProps = await buildPostProps(latestPost);
        return NextResponse.json(postProps, { status: 201 });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// This function handles updating a posts content/ taggedDate, and publish
// status seperately.
export async function PUT(
  req: NextRequest,
  route: { params: { id: string; togglePublished: boolean } }
) {
  const body = await req.json();
  const postId = parseFloat(route.params.id);

  const url = new URL(req.url);
  const togglePublished = url.searchParams.get('togglePublished');

  const session = await getServerSession(authOptions);

  if (session) {
    if (postId < 1 || postId % 1 !== 0) {
      return NextResponse.json({ error: 'Invalid Id' }, { status: 400 });
    }
    // Checking to see if the desired action is to toggle the publish status
    if (togglePublished) {
      try {
        const updatedPost = await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            published: !body,
          },
        });

        const postProps = await buildPostProps(updatedPost);

        return NextResponse.json(postProps, { status: 201 });
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const trimmedContent = await body.content.trim();

      if (trimmedContent === '') {
        return NextResponse.json(
          { error: 'Posts cannot be blank' },
          { status: 400 }
        );
      }

      const updatedPost = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          content: trimmedContent,
          taggedDate: body.taggedDate,
        },
      });

      const postProps = await buildPostProps(updatedPost);

      return NextResponse.json(postProps, { status: 201 });
    } catch (error) {
      console.log(error);
    }
  } else {
    return NextResponse.json({ error: 'Unauthorized action' }, { status: 401 });
  }
}

export async function DELETE(
  req: NextRequest,
  route: { params: { id: string } }
) {
  const today = new Date();
  const postId = parseFloat(route.params.id);
  console.log('postID', postId);
  const session = await getServerSession(authOptions);

  if (session) {
    if (postId < 1 || postId % 1 !== 0) {
      return NextResponse.json({ error: 'Invalid Id' }, { status: 400 });
    }

    console.log('entering logic');

    try {
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (post) {
        const decoratedPost = new PostService(post);
        const nextPost = await decoratedPost.nextPost();
        console.log('nextPost from postService', nextPost);

        await decoratedPost.delete();
        // If the next post exists
        if (nextPost) {
          const postProps = await buildPostProps(nextPost);
          console.log('accurate postProps', postProps);

          return NextResponse.json(postProps, { status: 200 });
          // Load the latest post
        } else {
          const latestPost = await prisma.post.findFirst({
            where: {
              taggedDate: {
                lt: today,
              },
            },
            orderBy: {
              taggedDate: 'desc',
            },
          });

          if (latestPost) {
            const postProps = await buildPostProps(latestPost);
            console.log('latestPostProps', postProps);

            return NextResponse.json(postProps, { status: 200 });
            // If the latest post doesn't exist
          } else {
            return NextResponse.json(
              { error: 'Post not found' },
              { status: 404 }
            );
          }
        }
      } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    return NextResponse.json({ error: 'Unauthorized action' }, { status: 401 });
  }
}

