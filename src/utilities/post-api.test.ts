import submitPost from './post-api';
import create from '../app/api/posts/create/route';

jest.mock('../app/api/posts/create/route');

describe('Post API', () => {
    test('Should call the post create route', async () => {
    const postData = {
        content: 'Hello I am a post!'
    }

    await submitPost(postData);

    expect(create).toHaveBeenCalled
    });
});
