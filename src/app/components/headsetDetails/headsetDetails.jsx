import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import {
  CheckOutlined, CloseOutlined, AndroidOutlined, WindowsOutlined, AppleOutlined, FrownTwoTone, SmileTwoTone,
} from '@ant-design/icons';

import './headsetDetails.scss';
import moment from 'moment';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../shape';

const HeadsetDetails = (props) => {
  const {
    selected, item, compareMode, onClick, compareResult,
  } = props;

  const getClassName = (compareTarget) => {
    if (!compareResult) return '';
    if (
      compareResult[compareTarget].find((element) => element.id === item.id)
    ) {
      return <SmileTwoTone twoToneColor="#52c41a" />;
    }
    return <FrownTwoTone twoToneColor="#D8122F" />;
  };

  return (
    <HeadsetCard item={item} selected={selected} onClick={onClick}>
      {!compareMode ? null : (
        <Card className="headset-card-details">
          <Card.Grid
            className="headset-card-details-title"
            hoverable={false}
          >
            General Informations
            <div className="headset-card-details-title-smile">
              {getClassName('price')}
            </div>
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Date Release
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.releasedate ? moment(item.releasedate.toDate()).calendar() : ''}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Brand
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.brand}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Price
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.price} $`}
          </Card.Grid>
          <Card.Grid
            className={`headset-card-details-title ${getClassName('screen')}`}
            hoverable={false}
          >
            Screen Specifications
            <div className="headset-card-details-title-smile">
              {getClassName('screen')}
            </div>
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            FOV
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.fov} °`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Refresh Rate
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.refreshrate} Hz`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Resolution per eyes
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.resolution.x} x ${item.resolution.y}`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Pixel Density
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.pixeldensity} dpi`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Screen Type
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.screentype}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            IPD Adjustement
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.ipd ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Flip-Up
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.flipup ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid className="headset-card-details-title" hoverable={false}>
            Other Specifications
          </Card.Grid>

          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Weight
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.weight} g`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Tracking
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.tracking}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Wireless
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.wireless ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Build in Audio
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.audio ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Build in Mic
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.mic ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-title">
            PC Requirement
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            OS
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.requirements.os
              ? item.requirements.os.map((element) => {
                const os = element;
                switch (os) {
                  case 'windows':
                    return <WindowsOutlined className="headset-card-details-logo" />;
                  case 'android':
                    return <AndroidOutlined className="headset-card-details-logo" />;
                  case 'macos':
                    return <AppleOutlined className="headset-card-details-logo" />;
                  default:
                    return '';
                }
              }) : null}

          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large-text">
            CPU
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large">
            {item.requirements.cpu}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large-text">
            GPU
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large">
            {item.requirements.gpu}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            RAM
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            className="headset-card-details-normal"
          >
            {`${item.requirements.ram} GB`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            USB
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.requirements.usb}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Video Port
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.requirements.video}
          </Card.Grid>
          <Card.Grid className="headset-card-details-title" hoverable={false}>
            What we think
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-large">
            {item.description}
          </Card.Grid>
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
