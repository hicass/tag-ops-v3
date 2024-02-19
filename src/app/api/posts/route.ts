'use server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../auth/[...nextauth]/route';
// import prisma from '../../../database/prisma';

import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  console.log('Create route initiated...');
  console.log('REQUEST BODY: ', req.body);
  return NextResponse.json({ message: "Hello World" });
}
