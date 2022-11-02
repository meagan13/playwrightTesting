module.exports = {
    globalSetup: require.resolve('./tests/global-setup.js'),
    use: {
      baseURL: 'https://pixinvent.com',
      headless: true,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      screenshot: 'only-on-failure',
      timeout: 30000,
    }
  };