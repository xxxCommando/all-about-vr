import React from 'react';
import { Layout, Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import './offline.scss';

const Offline = () => (
  <Layout.Content className="layout-single layout-404">
    <Result
      status="warning"
      title="There are some problems with your internet connection."
      extra={(
        <Link to="/">
          <Button type="primary">Reloard</Button>
        </Link>
        )}
    />
  </Layout.Content>
);

export default Offline;
