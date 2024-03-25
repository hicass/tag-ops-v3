import { GET } from '../../../../../../src/app/api/posts/[id]/route';
import { NextRequest } from 'next/server';
import { prismaMock } from '../../../../../utilities/mocks/mockPrisma';

describe('GET function', () => {
  describe('When an positive id is sent', () => {
    const date = new Date();
    const route = { params: { id: '4' } };
    const mockPost = {
      id: 4,
      content: 'I am a post, woohoo!',
      createdAt: date,
      updatedAt: date,
      taggedDate: date,
      published: false,
      authorId: 663,
    };

    beforeEach(() => {
      prismaMock.post.findUnique.mockResolvedValue(mockPost);
      prismaMock.post.findFirst.mockResolvedValue(mockPost);
      prismaMock.post.findFirst.mockResolvedValue(mockPost);
    });

    it('should return an object with the expected properties', async () => {
      const req = new Request('https://localhost:3000/api/post/4', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const nextReq = new NextRequest(req);

      const response = await GET(nextReq, route);
      const responseBody = await response?.json();

      expect(responseBody).toHaveProperty('currentPost');
      expect(responseBody).toHaveProperty('prevPostId');
      expect(responseBody).toHaveProperty('nextPostId');
    });
  });

  describe('When an invalid id is sent', () => {
    describe("if it's a negative number", () => {
      it('should return an error', async () => {
        const req = new Request('https://localhost:3000/api/post/-3', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const route = { params: { id: '-3' } };

        const response = await GET(nextReq, route);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Invalid id' });
        expect(response?.status).toEqual(400);
      });
    });

    describe("if it's a decimal", () => {
      it('should return an error', async () => {
        const req = new Request('https://localhost:3000/api/post/0.3', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const route = { params: { id: '0.3' } };

        const response = await GET(nextReq, route);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Invalid id' });
        expect(response?.status).toEqual(400);
      });
    });
  });
});
