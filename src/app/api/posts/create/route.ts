import type { NextApiRequest, NextApiResponse } from 'next';

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Post create route initiated...');
}
