import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './headsetDetails.scss';
import moment from 'moment';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../../shape';

const HeadsetDetails = (props) => {
  const {
    selected, item, compareMode, onClick, compareResult,
  } = props;

  const getClassName = (compareTarget) => {
    if (!compareResult) {
      return '';
    } if (compareResult[compareTarget] === item[compareTarget]) {
      return 'better';
    }
    return 'worst';
  };

  return (
    <HeadsetCard item={item} selected={selected} onClick={onClick}>
      {!compareMode ? null : (
        <Card className="headset-card-details">

          <Card.Grid className={`headset-card-details-title ${getClassName('price')}`} hoverable={false}><span>General Informations</span></Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Date Release</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.releasedate ? moment(item.releasedate.toDate()).calendar() : ''}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Brand</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.brand}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Price</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.price} $`}</Card.Grid>
          <Card.Grid className={`headset-card-details-title ${getClassName('screen')}`} hoverable={false}>Screen Specifications</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">FOV</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.fov} °`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Refresh Rate</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.refreshrate} Hz`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Resolution per eyes</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.resolution.x} x ${item.resolution.y}`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Pixel Density</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.pixeldensity} dpi`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Screen Type</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.screentype}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">IPD Adjustement</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.ipd ? <CheckOutlined /> : <CloseOutlined />}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Flip-Up</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.flipup ? <CheckOutlined /> : <CloseOutlined />}</Card.Grid>
          <Card.Grid className="headset-card-details-title" hoverable={false}>Other Specifications</Card.Grid>

          <Card.Grid hoverable={false} className="headset-card-details-normal">Weight</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.weight} g`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Tracking</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.tracking}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Wireless</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.wireless ? <CheckOutlined /> : <CloseOutlined />}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Build in Audio</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.audio ? <CheckOutlined /> : <CloseOutlined />}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Build in Mic</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.mic ? <CheckOutlined /> : <CloseOutlined />}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-title">PC Requirement</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">OS</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.requirements.os.join(', ')}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">CPU</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.requirements.cpu}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">GPU</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.requirements.gpu}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">RAM</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{`${item.requirements.ram} GB`}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">USB</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.requirements.usb}</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">Video Port</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">{item.requirements.video}</Card.Grid>
          <Card.Grid className="headset-card-details-title" hoverable={false}>What we think</Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large">{item.description}</Card.Grid>

        </Card>

      )}
    </HeadsetCard>
  );
};

HeadsetDetails.propTypes = {
  selected: PropTypes.bool,
  item: HeadsetShape,
  compareMode: PropTypes.bool,
  onClick: PropTypes.func,
  compareResult: PropTypes.shape({}),
};

HeadsetDetails.defaultProps = {
  selected: false,
  item: {},
  compareMode: true,
  onClick: null,
  compareResult: null,
};

export default HeadsetDetails;
