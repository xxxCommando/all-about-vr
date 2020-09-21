import React from 'react';

import {
  Image, Row, Col, Typography, Layout,
} from 'antd';
import { HeadsetShape } from '../../shape';

import './headset.scss';

const Headset = (props) => {
  const { item } = props;

  return (
    <>
      <Typography.Title level={1}>{item.name}</Typography.Title>

      {
        item.pushedContents.map((content, index) => (
          <Layout Layout className="single-pushed-content">
            <Row justify="center" className={content.right || (index % 2 !== 0) ? 'right' : 'left'}>
              <Col flex="0 0 400px">
                <Image width={300} src={content.img} preview={false} alt={item.name} />
              </Col>
              <Col flex="0 0 400px">
                <Typography.Paragraph>
                  {content.text}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Layout>
        ))
      }
    </>
  );
};

Headset.propTypes = {
  item: HeadsetShape.isRequired,
};

export default Headset;
