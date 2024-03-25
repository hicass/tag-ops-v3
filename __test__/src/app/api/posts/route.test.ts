import { POST } from '../../../../../src/app/api/posts/route';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { prismaMock } from '../../../../utilities/mocks/mockPrisma.ts';
import { invalidSession, validSession } from '../../../../utilities/fixtures/session.ts';

jest.mock('next-auth');

describe('POST function', () => {
  describe('When user is authenticated', () => {
    beforeEach(() => {
      (getServerSession as jest.Mock).mockResolvedValue(validSession);
    });

    describe('and a post has content', () => {
      const body = { content: 'Test content' };

      it('should create a post', async () => {
        const mockPostCreate = jest
          .spyOn(prismaMock.post, 'create')
          .mockResolvedValue({
            id: 123,
            content: 'Test content',
            createdAt: new Date(),
            updatedAt: new Date(),
            taggedDate: new Date(),
            published: false,
            authorId: 1234,
          });

        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(body),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        await POST(nextReq, nextRes);

        expect(mockPostCreate.mock.calls.length).toBe(1);
        expect(mockPostCreate).toHaveBeenCalledWith({
          data: {
            content: body.content,
            author: { connect: { email: validSession.user.email } },
          },
        });
      });

      it('should trim trailing white space', async () => {
        const mockPostCreate = jest
          .spyOn(prismaMock.post, 'create')
          .mockResolvedValue({
            id: 123,
            content: 'Trailing white space',
            createdAt: new Date(),
            updatedAt: new Date(),
            taggedDate: new Date(),
            published: false,
            authorId: 1234,
          });
        const whiteSpaceBody = { content: '   Trailing white space    ' };

        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(whiteSpaceBody),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        await POST(nextReq, nextRes);

        expect(mockPostCreate).toHaveBeenCalledWith({
          data: {
            content: whiteSpaceBody.content.trim(),
            author: { connect: { email: validSession.user.email } },
          },
        });
      });

      it('should include post data in response', async () => {
        const date = new Date();
        const prismaResponse = {
          id: 4,
          content: 'I am a post, woohoo!',
          createdAt: date,
          updatedAt: date,
          taggedDate: date,
          published: false,
          authorId: 663,
        };

        prismaMock.post.create.mockResolvedValue(prismaResponse);

        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(body),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        const response = await POST(new NextRequest(req), new NextResponse());
        const responseBody = await response.json();

        expect(responseBody).toEqual({
          ...prismaResponse,
          createdAt: date.toISOString(),
          updatedAt: date.toISOString(),
          taggedDate: date.toISOString(),
        });
      });
    });

    describe('and a post has no content', () => {
      const emptyBody = { content: '' };

      it("the create method shouldn't be called", async () => {
        const mockPostCreate = jest.spyOn(prismaMock.post, 'create');

        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(emptyBody),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        await POST(nextReq, nextRes);

        expect(mockPostCreate.mock.calls.length).toBe(0);
      });

      it('will return an error', async () => {
        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(emptyBody),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        const response = await POST(nextReq, nextRes);
        const responseMessage = await response.json();

        expect(responseMessage).toEqual({ error: 'Posts cannot be blank' });
        expect(response.status).toEqual(400);
      });
    });

    describe('and a post had only white space', () => {
      const emptyBody = { content: '      ' };

      it("the create method shouldn't be called", async () => {
        const mockPostCreate = jest.spyOn(prismaMock.post, 'create');

        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(emptyBody),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        await POST(nextReq, nextRes);

        expect(mockPostCreate.mock.calls.length).toBe(0);
      });

      it('will return an error', async () => {
        const req = new Request('https://localhost:3000/api/post', {
          body: JSON.stringify(emptyBody),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const nextReq = new NextRequest(req);
        const nextRes = new NextResponse();

        const response = await POST(nextReq, nextRes);
        const responseMessage = await response.json();

        expect(responseMessage).toEqual({ error: 'Posts cannot be blank' });
        expect(response.status).toEqual(400);
      });
    });
  });

  describe('When user is not authenticated', () => {
    beforeEach(() => {
      (getServerSession as jest.Mock).mockResolvedValue(invalidSession);
    });

    const body = { content: 'There is no user' };

    it('returns unauthorized error', async () => {
      const req = new Request('https://localhost:3000/api/post', {
        body: JSON.stringify(body),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const nextReq = new NextRequest(req);
      const nextRes = new NextResponse();

      const response = await POST(nextReq, nextRes);
      const responseMessage = await response.json();

      expect(responseMessage).toEqual({ error: 'Unauthorized action' });
      expect(response.status).toEqual(401);
    });

    it("the create method shouldn't be called", async () => {
      const mockPostCreate = jest.spyOn(prismaMock.post, 'create');

      const req = new Request('https://localhost:3000/api/post', {
        body: JSON.stringify(body),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const nextReq = new NextRequest(req);
      const nextRes = new NextResponse();

      await POST(nextReq, nextRes);

      expect(mockPostCreate.mock.calls.length).toBe(0);
    });
  });
});
