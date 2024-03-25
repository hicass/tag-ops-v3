import sendRequest from '../../../src/utilities/send-request';


describe('sendRequest', () => {
    const timeout = 100;

    test('Should timeout if the request takes longer than the specified timeout', async () => {
        const mockServerUrl = 'not/real';
        
        // Set timeout to exceed maximum allowed time in sendRequest call
        const delayedResponse = new Promise(resolve => {
            setTimeout(() => resolve({ ok: true }), timeout + 10);
        });

        global.fetch = jest.fn().mockResolvedValue(delayedResponse);

        await expect(sendRequest(mockServerUrl, 'GET', {}, timeout)).rejects.toThrow(Error);
    });

    test('Should raise an Error if response is 400', async () => {
        const mockServerUrl = 'not/real';

        // Mock 400 response
        global.fetch = jest.fn().mockRejectedValue({ok: false});

        await expect(sendRequest(mockServerUrl, 'GET', {}, timeout)).rejects.toThrow(Error);
    });
});
