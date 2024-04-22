import PostService from '../../../prisma/services/PostService';
import { prismaMock } from '../../utilities/mocks/mockPrisma';

const mockPosts = [
  {
    id: 1,
    content: 'I am a post, woohoo!',
    createdAt: new Date('2024-03-15 16:23:14.882'),
    updatedAt: new Date('2024-03-15 16:23:14.882'),
    taggedDate: new Date('2024-03-15 16:23:14.882'),
    published: true,
    authorId: 1,
  },
  {
    id: 2,
    content: 'I am a post, woohoo!',
    createdAt: new Date('2024-03-11 00:00:00'),
    updatedAt: new Date('2024-03-11 00:00:00'),
    taggedDate: new Date('2024-03-11 00:00:00'),
    published: true,
    authorId: 1,
  },
  {
    id: 3,
    content: 'I am a post, woohoo!',
    createdAt: new Date('2024-03-10 00:00:00'),
    updatedAt: new Date('2024-03-10 00:00:00'),
    taggedDate: new Date('2024-03-10 00:00:00'),
    published: true,
    authorId: 1,
  },
];

describe('prevPost method', () => {
  describe('when given a post', () => {
    it('should return the previous post', async () => {
      prismaMock.post.findFirst.mockResolvedValue(mockPosts[0]);

      const decoratedPost = new PostService(mockPosts[1]);
      const prevPost = await decoratedPost.prevPost();

      expect(prismaMock.post.findFirst).toHaveBeenCalledTimes(1);
      expect(prismaMock.post.findFirst).toHaveBeenCalledWith({
        where: {
          taggedDate: {
            lt: decoratedPost.taggedDate,
          },
        },
        orderBy: {
          taggedDate: 'desc',
        },
      });
      expect(prevPost).toEqual(mockPosts[0]);
    });
  });
});

describe('nextPost method', () => {
  describe('when given a post', () => {
    it('should return the next post', async () => {
      prismaMock.post.findFirst.mockResolvedValue(mockPosts[2]);

      const decoratedPost = new PostService(mockPosts[1]);
      const nextPost = await decoratedPost.nextPost();

      expect(prismaMock.post.findFirst).toHaveBeenCalledTimes(1);
      expect(prismaMock.post.findFirst).toHaveBeenCalledWith({
        where: {
          taggedDate: {
            gt: decoratedPost.taggedDate,
          },
        },
        orderBy: {
          taggedDate: 'asc',
        },
      });
      expect(nextPost).toEqual(mockPosts[2]);
    });
  });
});

describe('delete method', () => {
  describe('when given a post', () => {
    it('should delete the post', async () => {
      const decoratedPost = new PostService(mockPosts[1]);
      await decoratedPost.delete();

      const mockPostDelete = jest.spyOn(prismaMock.post, 'delete');

      expect(mockPostDelete.mock.calls.length).toBe(1);
      expect(mockPostDelete).toHaveBeenCalledWith({
        where: {
          id: mockPosts[1].id,
        },
      });
    });
  });
});
