'use server';
import sendRequest from './send-request';
const BASE_URL = 'api/posts';

export async function getLatest() {
  return sendRequest(`${BASE_URL}`, 'GET');
}

export async function getBatchOfPosts() {
  return sendRequest(`${BASE_URL}/batch`, 'GET');
}

export async function getFilteredBatchProps(filter: string) {
  return sendRequest(`${BASE_URL}/batch?filter=${filter}`, 'GET');
}

export async function getNextBatchProps(id: number | undefined) {
  return sendRequest(`${BASE_URL}/batch?cursorId=${id}&action=next`, 'GET');
}

export async function getPrevBatchProps(id: number | undefined) {
  return sendRequest(`${BASE_URL}/batch?cursorId=${id}&action=prev`, 'GET');
}

export async function findPost(id: number | undefined) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

export async function submitPost(postData: {
  content: string;
  taggedDate: Date;
  published: boolean;
}) {
  return sendRequest(`${BASE_URL}`, 'POST', postData);
}

export async function updatePost(
  postData: { content: string; taggedDate: Date },
  id: number
) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', postData);
}

export async function setPublished(
  id: number | undefined,
  publishStatus: boolean | undefined
) {
  return sendRequest(`${BASE_URL}/${id}?togglePublished=true`, 'PUT', publishStatus);
}

export async function deletePost(id: number | undefined) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
