import React from 'react';
import { Layout, Result, Button } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './construction.scss';

const Construction = () => (
  <Layout.Content className="layout-construction">
    <Result
      icon={<FormatPainterOutlined />}
      title="This page is under construction and is coming soon!"
      extra={(
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
        )}
    />
  </Layout.Content>
);

export default Construction;
