import { submitPost } from './post-api';
import { POST } from '../api/posts/route';

jest.mock('../api/posts/route');

describe('Post API', () => {
    test('Should call the POST route', async () => {
    const postData = {
        content: 'Hello I am a post!'
    }

    await submitPost(postData);

    expect(POST).toHaveBeenCalled
    });
});
