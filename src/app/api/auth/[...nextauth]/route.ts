import bcrypt from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/database/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      authorize: async (credentials: {
        username: string;
        password: string;
      }) => {
        if (!credentials.username || !credentials.password) {
          throw new Error('Username or password is missing');
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (user) {
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (passwordsMatch) {
            return {
              id: user.id,
              name: user.username,
              email: user.email,
            };
          }
        }
      },
    }),
  ],
  callbacks: {
    // jwt is called before session
    async jwt({ token, account, profile }) {
      // Add what you'd like to the token here
      return token;
    },
    async session({ session, token, user }) {
      return { ...session, token: token };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
