import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './construction.scss';

const Construction = () => (

  <Result
    icon={<FormatPainterOutlined />}
    title="This page is under construction and is coming soon!"
    extra={(
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
)}

  />

);

export default Construction;
