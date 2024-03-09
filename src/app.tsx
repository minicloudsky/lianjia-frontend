import { RunTimeLayoutConfig } from '@umijs/max';
import React from 'react';

export const layout: RunTimeLayoutConfig = (initialState) => {
  return {
    // 常用属性
    title: '链家房产数据分析平台',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',

    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    // 自定义 404 页面
    noFound: <div>noFound</div>,

    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};