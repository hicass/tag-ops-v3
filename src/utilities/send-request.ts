'use server';
import { cookies } from 'next/headers';

interface Method {
  GET: 'GET';
  POST: 'POST';
  PUT: 'PUT';
  DELETE: 'DELETE';
}

export default async function sendRequest(
  path: string,
  method: keyof Method,
  body?: any,
  timeout: number = 9000
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  // TODO: Research how to handle this in test or test config
  const reqCookies: any = process.env.NODE_ENV === 'test' ? {} : cookies().toString()

  try {
    const url = `${process.env.NEXT_PUBLIC_URL}/${path}`;

    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Cookie: reqCookies,
      },
    });

    if (res.ok) return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Bad Request');
    
  } finally {
    clearTimeout(timeoutId);
  }
}
