import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

import { HeadsetShape } from '../../../shape';
import './headsetCard.scss';

const HeadsetCard = (props) => {
  const {
    selectForCompare, item, compareMode, onClick,
  } = props;
  return (
    <Card
      onClick={
        compareMode && !selectForCompare ? () => {} : () => onClick(item.id)
      }
      hoverable
      bordered
      className={selectForCompare ? 'selected' : ''}
      title={item.name}
      cover={<Image src={item.img} preview={false} />}
      extra={(
        <FileSearchOutlined
          key="information"
          onClick={() => console.log('router vers la page')}
        />
      )}
    >
      <Card.Meta title={item.name} description={`${item.price} $`} />
    </Card>
  );
};

HeadsetCard.propTypes = {
  selectForCompare: PropTypes.bool,
  item: HeadsetShape,
  compareMode: PropTypes.bool,
  onClick: PropTypes.func,
};

HeadsetCard.defaultProps = {
  selectForCompare: false,
  item: {},
  compareMode: false,
  onClick: () => console.warn('onClick is not defined'),
};

export default HeadsetCard;
