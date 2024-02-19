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
  body: any,
  timeout: number = 9000
) {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${process.env.URL}/${url}`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal
    });

    if (res.ok) return res.json();
  } catch (error) {
    throw new Error('Bad Request');
  } finally {
    clearTimeout(timeoutId);
  }
}
