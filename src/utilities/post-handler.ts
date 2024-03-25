'use server';
import sendRequest from './send-request';
const BASE_URL = 'api/posts';

export async function getLatest() {
  return sendRequest(`${BASE_URL}`, 'GET');
}

export async function findPost(id: number | undefined) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

export async function submitPost(postData: { content: string }) {
  return sendRequest(`${BASE_URL}`, 'POST', postData);
}
