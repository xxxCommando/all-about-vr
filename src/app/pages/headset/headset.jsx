import React from 'react';

import {
  Image, Row, Col, Typography, Layout,
} from 'antd';
import { HeadsetShape } from '../../../shape';

import './headset.scss';

const Headset = (props) => {
  const { item } = props;

  return (
    <>
      <Typography.Title level={1}>{item.name}</Typography.Title>

      <Layout>
        <Row justify="center">
          <Col flex="0 0 400px"><Image width={300} src={item.img} preview={false} alt={item.name} /></Col>
          <Col flex="0 0 400px">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Paragraph>
          </Col>
        </Row>
      </Layout>

      <Layout>
        <Row justify="center">
          <Col flex="0 0 400px"><Image width={300} src={item.img} preview={false} alt={item.name} /></Col>
          <Col flex="0 0 400px">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography.Paragraph>
          </Col>
        </Row>
      </Layout>

    </>
  );
};

Headset.propTypes = {
  item: HeadsetShape.isRequired,
};

export default Headset;
