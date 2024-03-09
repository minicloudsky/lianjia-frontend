import React, { useEffect } from 'react';
import { history, useSearchParams } from 'umi';
import { Spin } from 'antd';

const RedirectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect && redirect !== '') {
      window.location.href = redirect;
    } else {
      history.push('/');
    }
  }, [searchParams]);
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin tip="redirecting..." />
    </div>
  );
};

export default RedirectPage;
