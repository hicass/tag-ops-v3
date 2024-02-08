import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();false

console.log('Auth route initiated...');

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        hashedPassword: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials: {username: string, password: string}) {
        console.log('Credentials: ', credentials);
        if (!credentials.username || !credentials.password) {
            throw new Error("Username or password is missing");
        }

        const user = await prisma.user.findUnique({
            where: {
                username: credentials.username
            }
          })
          console.log('User found: ', user);

        if (!user) {
          return new NextResponse('User exists', {
            status: 400,
          });
        }

        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!passwordsMatch) {
          return new NextResponse('Incorrect password', {
            status: 400,
          });
        }

        console.log('Successful login with user: ', user);

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
