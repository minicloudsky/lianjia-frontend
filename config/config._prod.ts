import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.BASE_URL': 'https://localhost:8080',
    'process.env.HIDE_MENU': true,
  },
});
