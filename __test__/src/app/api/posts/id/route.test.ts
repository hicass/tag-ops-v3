import { prismaMock } from '../../../../../utilities/mocks/mockPrisma';
import * as postIdRoute from '../../../../../../src/app/api/posts/[id]/route';

import { getServerSession } from 'next-auth';
import {
  invalidSession,
  validSession,
} from '../../../../../utilities/fixtures/session';

import { NextRequest, NextResponse } from 'next/server';

const date = new Date();
const mockPost = {
  id: 4,
  content: 'I am a post, woohoo!',
  createdAt: date,
  updatedAt: date,
  taggedDate: date,
  published: false,
  authorId: 663,
};

jest.mock('next-auth');

describe('GET function', () => {
  describe('When an positive id is sent', () => {
    const route = { params: { id: '4' } };

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

      const response = await postIdRoute.GET(nextReq, route);
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

        const response = await postIdRoute.GET(nextReq, route);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Invalid Id' });
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

        const response = await postIdRoute.GET(nextReq, route);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Invalid Id' });
        expect(response?.status).toEqual(400);
      });
    });
  });
});

describe('PUT function', () => {
  describe('When a user is authenticated', () => {
    beforeEach(() => {
      (getServerSession as jest.Mock).mockResolvedValue(validSession);
    });

    describe('and a valid id is sent', () => {
      it('should update the post', async () => {
        const body = {
          content: 'I am an updated post, woohoo!',
          taggedDate: new Date(2024, 4, 16),
        };
        const params = { params: { id: '4', togglePublished: false } };

        const mockPostUpdate = jest
          .spyOn(prismaMock.post, 'update')
          .mockResolvedValue({
            id: 4,
            content: 'I am an updated post, woohoo!',
            createdAt: date,
            updatedAt: date,
            taggedDate: date,
            published: true,
            authorId: 663,
          });

        const req = new Request('https://localhost:3000/api/posts/4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostUpdate.mock.calls.length).toBe(1);
        expect(mockPostUpdate).toHaveBeenCalledWith({
          data: {
            content: body.content,
            taggedDate: body.taggedDate.toISOString(),
          },
          where: {
            id: 4,
          },
        });
      });

      it('should trim trailing white space', async () => {
        const body = {
          content: '   I am an updated post, woohoo!   ',
          taggedDate: new Date(2024, 4, 16),
        };
        const params = { params: { id: '4', togglePublished: false } };

        const mockPostUpdate = jest
          .spyOn(prismaMock.post, 'update')
          .mockResolvedValue({
            id: 4,
            content: 'I am an updated post, woohoo!',
            createdAt: date,
            updatedAt: date,
            taggedDate: date,
            published: true,
            authorId: 663,
          });

        const req = new Request('https://localhost:3000/api/posts/4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostUpdate).toHaveBeenCalledWith({
          data: {
            content: body.content.trim(),
            taggedDate: body.taggedDate.toISOString(),
          },
          where: {
            id: 4,
          },
        });
      });

      it('should toggle the publish status', async () => {
        const body = true;
        const params = { params: { id: '4', togglePublished: true } };

        const mockPostUpdate = jest
          .spyOn(prismaMock.post, 'update')
          .mockResolvedValue({
            id: 4,
            content: 'I am an updated post, woohoo!',
            createdAt: date,
            updatedAt: date,
            taggedDate: date,
            published: false,
            authorId: 663,
          });

        const req = new Request(
          'https://localhost:3000/api/posts/4?togglePublished=true',
          {
            body: JSON.stringify(body),
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostUpdate).toHaveBeenCalledWith({
          where: {
            id: 4,
          },
          data: {
            published: !body,
          },
        });
      });
    });

    describe('and an invalid id is sent', () => {
      const body = {
        content: 'I am an updated post, woohoo!',
        taggedDate: new Date(2024, 4, 16),
      };
      const params = { params: { id: '0.4', togglePublished: false } };

      it("shouldn't call the update method", async () => {
        const mockPostCreate = jest.spyOn(prismaMock.post, 'update');

        const req = new Request('https://localhost:3000/api/posts/0.4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostCreate.mock.calls.length).toBe(0);
      });

      it('should return an error', async () => {
        const req = new Request('https://localhost:3000/api/post/0.4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        const response = await postIdRoute.PUT(nextReq, params);
        const responseMessage = await response?.json()

        expect(responseMessage).toEqual({ error: 'Invalid Id' });
        expect(response?.status).toEqual(400);
      });
    });

    describe('and a post has no content', () => {
      const body = {
        content: '',
        taggedDate: new Date(2024, 4, 16),
      };
      const params = { params: { id: '4', togglePublished: false } };

      it("shouldn't call the update method", async () => {
        const mockPostCreate = jest.spyOn(prismaMock.post, 'update');

        const req = new Request('https://localhost:3000/api/posts/4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostCreate.mock.calls.length).toBe(0);
      });

      it('should return an error', async () => {
        const req = new Request('https://localhost:3000/api/posts/4', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        const response = await postIdRoute.PUT(nextReq, params);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Posts cannot be blank' });
        expect(response?.status).toEqual(400);
      });
    });
  });

  describe('When a user is unauthenticated', () => {
    beforeEach(() => {
      (getServerSession as jest.Mock).mockResolvedValue(invalidSession);
    });

    const body = {
      content: 'I am a hacker!',
      taggedDate: new Date(2024, 4, 16),
    };
    const params = { params: { id: '1234', togglePublished: true } };

    it('returns unauthorized error', async () => {
      const req = new Request('https://localhost:3000/api/posts/1234', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        const response = await postIdRoute.PUT(nextReq, params);
        const responseMessage = await response?.json();

        expect(responseMessage).toEqual({ error: 'Unauthorized action' });
        expect(response?.status).toEqual(401);
    });

    it("shouldn't call the update method", async () => {
      const mockPostCreate = jest.spyOn(prismaMock.post, 'update');

        const req = new Request('https://localhost:3000/api/posts/1234', {
          body: JSON.stringify(body),
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);

        await postIdRoute.PUT(nextReq, params);

        expect(mockPostCreate.mock.calls.length).toBe(0);
    });
  });
});
