import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  hash: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  base: '/',
  publicPath: '/',
  outputPath: 'dist',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '链家房产数据可视化平台'
  },
  routes: routes,
  npmClient: 'yarn',
  proxy: {
    '/api': {
      'target': 'http://localhost:8000',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : 'http://localhost:8000' },
    },
  },
  // openAPI: {
  //   requestLibPath: "import { request } from 'umi'",
  //   // 或者使用在线的版本
  //   schemaPath: "http://localhost:8000/q/service/lianjia.v1.Lianjia",
  //   // schemaPath: join(__dirname, 'oneapi.json'),
  //   mock: false,
  // }
});
