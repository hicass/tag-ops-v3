import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface User {
  username: string;
  email: string;
  hashedPassword: string;
}

export async function POST(request: NextRequest): Promise<User | NextResponse> {
  const body = await request.json();
  const { username, email, password } = body.newUserData;

  console.log('Register request body: ', body.newUserData);

  if (!username || !email || !password) {
    return new NextResponse('Missing username, email, or password', {
      status: 400,
    });
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    return new NextResponse('User already exists', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      hashedPassword,
    },
  });

  console.log('New user created: ', user);

  return NextResponse.json(user);
}
