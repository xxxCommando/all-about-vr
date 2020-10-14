import React from 'react';
import PropTypes from 'prop-types';

import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

import './backTopCustom.scss';

const BackTopCustom = (props) => {
  const { icon, onClick, visibilityHeight } = props;
  return (
    <BackTop visibilityHeight={visibilityHeight} onClick={onClick || null} duration={700} className="back-top-custom">
      <div className="back-top-custom-icon">{icon || <ArrowUpOutlined />}</div>
    </BackTop>
  );
};

BackTopCustom.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  visibilityHeight: PropTypes.number,
};

BackTopCustom.defaultProps = {
  icon: <ArrowUpOutlined />,
  onClick: null,
  visibilityHeight: 400,
};

export default BackTopCustom;
