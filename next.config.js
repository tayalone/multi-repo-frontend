module.exports = {
  publicRuntimeConfig: {
    URL_BACKEND_API_SSR:
      process.env.URL_BACKEND_API_SSR || 'http://localhost:5000',
    URL_BACKEND_API: process.env.URL_BACKEND_API || 'http://localhost:5000'
  },
  serverRuntimeConfig: {
    BACKEND_SERVICE_URL: process.env.BACKEND_SERVICE_URL
  }
}
