import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const ServerErrorPage: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default ServerErrorPage;
