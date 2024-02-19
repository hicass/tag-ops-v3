import sendRequest from './send-request';

describe('sendRequest', () => {
    test('Should timeout if the request takes longer than the specified timeout', async () => {
        const mockServerUrl = 'not/real';
        const timeout = 2000;
        
        const delayedResponse = new Promise(resolve => {
            setTimeout(() => resolve({ ok: true }), 3000);
        });

        global.fetch = jest.fn().mockResolvedValue(delayedResponse);

        await expect(sendRequest(mockServerUrl, 'GET', {}, timeout)).rejects.toThrow('Bad Request');
    });
});