import { Post } from '@prisma/client';
import prisma from '@/database/prisma';

export default class Posts {
  constructor(private _post: Post) {}

  get post(): Post {
    return this._post;
  }

  get taggedDate(): Date {
    return this._post.taggedDate;
  }

  async prevPost(): Promise<Post | null> {
    return await prisma.post.findFirst({
      where: {
        taggedDate: {
          lt: this._post?.taggedDate,
        },
      },
      orderBy: {
        taggedDate: 'desc',
      },
    });
  }

  async nextPost(): Promise<Post | null> {
    return await prisma.post.findFirst({
      where: {
        taggedDate: {
          gt: this._post?.taggedDate,
        },
      },
      orderBy: {
        taggedDate: 'asc',
      },
    });
  }

  async delete(): Promise<Post | undefined> {
    console.log('delete service called')
    console.log(this);
    try {
      const deletedPost = await prisma.post.delete({
        where: {
          id: this._post?.id,
        },
      });

      return deletedPost;
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    postData: Pick<Post, 'taggedDate' | 'content' | 'published'>
  ): Promise<Post | undefined> {
    try {
      const updatedPost = await prisma.post.update({
        where: {
          id: this._post?.id,
        },
        data: {
          content: postData.content,
          taggedDate: postData.taggedDate,
          published: postData.published,
        },
      });

      this._post = updatedPost;

      return this._post;
    } catch (error) {
      console.log(error);
    }
  }
}
