import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Image } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

import { HeadsetShape } from '../../../shape';
import './headsetCard.scss';

const HeadsetCard = (props) => {
  const {
    selectForCompare, item, compareMode, onClick, children,
  } = props;
  return (
    <div className="headset-card">
      <Card
        onClick={
          !onClick || (compareMode && !selectForCompare) ? () => {} : () => onClick(item.id)
        }
        hoverable={onClick}
        bordered
        className={selectForCompare ? 'selected' : ''}
        title={item.name}
        cover={<Image src={item.img} preview={false} />}
      >
        {
          children || <Card.Meta description={item.summary} title={`${item.price} $`} />
        }
      </Card>
      <Link to={`/headsets/${item.id}`} className="card-link">
        <FileSearchOutlined key="information" />
      </Link>
    </div>
  );
};

HeadsetCard.propTypes = {
  selectForCompare: PropTypes.bool,
  item: HeadsetShape,
  compareMode: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

HeadsetCard.defaultProps = {
  selectForCompare: false,
  item: {},
  compareMode: false,
  onClick: null,
  children: null,
};

export default HeadsetCard;
