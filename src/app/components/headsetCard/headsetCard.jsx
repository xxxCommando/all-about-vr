import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { Card, Image } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

import { HeadsetShape } from '../../shape';
import './headsetCard.scss';

const HeadsetCard = (props) => {
  const {
    selected,
    item,
    onClick,
    children,
    location,
  } = props;
  const isHeadsetPage = location.pathname.split('/')[1] === 'headsets';

  const getHeadsetStatus = (status) => {
    if (status === 1) return 'Coming Soon';
    if (status === 3) return 'Outdated';
    return '';
  };

  const getHeadsetMetaTitle = (headset) => {
    if (!headset.price && headset.status === 2) {
      return 'Free';
    }
    if (!headset.price) {
      return getHeadsetStatus(headset.status);
    }
    return `${headset.price} $ ${getHeadsetStatus(headset.status)}`;
  };

  return (
    <div className="headset-card">
      <Card
        onClick={
          !onClick
            ? () => {}
            : () => onClick(item.id)
        }
        hoverable={onClick}
        bordered
        className={selected ? 'selected' : ''}
        title={item.name}
        cover={<Image src={item.img} preview={false} alt={item.name} />}
      >
        {children || (
          <Card.Meta description={item.summary} title={getHeadsetMetaTitle(item)} />
        )}
      </Card>
      {isHeadsetPage ? null : (
        <Link to={`/headset/${item.id}`} className="card-link">
          <FileSearchOutlined key="information" />
        </Link>
      )}
    </div>
  );
};

HeadsetCard.propTypes = {
  selected: PropTypes.bool,
  item: HeadsetShape,
  onClick: PropTypes.func,
  children: PropTypes.element,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

HeadsetCard.defaultProps = {
  selected: false,
  item: {},
  onClick: null,
  children: null,
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default withRouter(HeadsetCard);
