import { loadEnvConfig } from '@next/env';

interface Method {
    GET: 'GET';
    POST: 'POST';
    PUT: 'PUT';
    DELETE: 'DELETE';
}

export default async function sendRequest(
  url: string,
  method: keyof Method,
  body: any
) {
  const projectDir = process.cwd();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);
  loadEnvConfig(projectDir);

  try {
    const res = await fetch(`${process.env.URL}/${url}`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    clearTimeout(timeoutId); 

    if (res.ok) return res.json();
  } catch (error) {
    throw new Error('Bad Request');
  }
}
