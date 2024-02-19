import { loadEnvConfig } from '@next/env';

interface Method {
  GET: 'GET';
  POST: 'POST';
  PUT: 'PUT';
  DELETE: 'DELETE';
}

export default async function sendRequest(
  url: string,
  method = 'GET',
  body: any
) {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  try {
    console.log(`${process.env.URL}/${url}`)
    const res = await fetch(`${process.env.URL}/${url}`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    console.log('Response: ', res);

    if (res.ok) return res.json();
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Bad Request');
  }
}
