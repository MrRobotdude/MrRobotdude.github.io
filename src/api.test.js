jest.mock('axios', () => ({ post: jest.fn(), get: jest.fn() }));

describe('contact submission configuration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    delete process.env.REACT_APP_API_BASE_URL;
    delete process.env.REACT_APP_SITE_KEY;
  });

  afterAll(() => { process.env = originalEnv; });

  test('does not send a request when the contact backend is unconfigured', async () => {
    const api = require('./api');
    const axios = require('axios');
    expect(api.contactFormAvailable).toBe(false);
    await expect(api.createMessage('CP-001', 'Demo', '123456789', 'demo@example.com', 'Hello', 'token'))
      .rejects.toThrow('Contact form is unavailable.');
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('submits the CAPTCHA token to the configured backend', async () => {
    process.env.REACT_APP_API_BASE_URL = 'https://contact.example.com/';
    process.env.REACT_APP_SITE_KEY = 'public-test-site-key';
    const api = require('./api');
    const axios = require('axios');
    axios.post.mockResolvedValue({ data: { ok: true } });
    await expect(api.createMessage('CP-002', 'Demo', '123456789', 'demo@example.com', 'Hello', 'test-token'))
      .resolves.toEqual({ ok: true });
    expect(axios.post).toHaveBeenCalledWith('https://contact.example.com/create', {
      receiver: 'CP-002', senderName: 'Demo', senderPhone: '123456789',
      senderEmail: 'demo@example.com', message: 'Hello', captchaToken: 'test-token',
    });
  });
});
