import sendRequest from "./send-request";
const BASE_URL = 'api/post'

export default async function submitPost(postData: { content: string }) {
    return sendRequest(`${BASE_URL}/create`, 'POST', postData);
}
