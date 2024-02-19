'use server';
import sendRequest from './send-request';
const BASE_URL = 'api/posts'

export async function submitPost(postData: { content: string }) {
    return sendRequest(`${BASE_URL}`, 'POST', postData);
}
