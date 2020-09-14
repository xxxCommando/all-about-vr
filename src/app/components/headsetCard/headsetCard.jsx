import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { Card, Image } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

import { HeadsetShape } from '../../../shape';
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
          <Card.Meta description={item.summary} title={`${item.price} $`} />
        )}
      </Card>
      {isHeadsetPage ? null : (
        <Link to={`/headsets/${item.id}`} className="card-link">
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
