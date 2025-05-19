import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://31.97.17.191',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});