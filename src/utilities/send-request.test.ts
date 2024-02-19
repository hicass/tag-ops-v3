import sendRequest from './send-request';

describe('sendRequest', () => {
    test('Should throw a timeout error if it gets invalid args', () => {
        const result = sendRequest('/test', 'GET', false);
        const expected = 'Bad Request';

        expect(result).toBe(expected);
    })
})