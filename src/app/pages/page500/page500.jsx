import React from 'react';
import { Layout, Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import './page500.scss';

const Page500 = () => (
  <Layout.Content className="layout-500">
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      className="layout-500"
      extra={(
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
        )}
    />
  </Layout.Content>
);

export default Page500;
