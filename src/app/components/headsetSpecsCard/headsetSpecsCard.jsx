import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';
import './headsetSpecsCard.scss';

const headsetSpecsCard = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="specs-headset-card">
      <Card>
        {children}
      </Card>

    </div>
  );
};

headsetSpecsCard.propTypes = {
  children: PropTypes.element,
};

headsetSpecsCard.defaultProps = {
  children: null,
};

export default headsetSpecsCard;
