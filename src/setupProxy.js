const { createProxyMiddleware } = require('http-proxy-middleware');

const SERVER_URL = '192.168.11.98:5000';

module.exports = (app) => {
  app.use(createProxyMiddleware(['/login', '/addhist'], {
    target: SERVER_URL,
    changeOrigin: true,
    router: {
      '/login': `${SERVER_URL}/login`,
      '/addhist': `${SERVER_URL}/addhist`,
    },
  }));
};
