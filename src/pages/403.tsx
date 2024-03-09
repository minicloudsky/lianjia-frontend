import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const UnAuthorizedPage: React.FC = () => (
  <Result
  status="403"
  title="403"
  subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default UnAuthorizedPage;
