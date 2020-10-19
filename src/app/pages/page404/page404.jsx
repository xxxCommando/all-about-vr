import React from 'react';
import { Layout, Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => (
  <Layout.Content className="layout-404">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={(
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
        )}
    />
  </Layout.Content>
);

export default Page404;
