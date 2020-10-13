import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Drawer, Button } from 'antd';
import {
  createFromIconfontCN,
  CheckOutlined,
  CloseOutlined,
  AndroidOutlined,
  WindowsOutlined,
  AppleOutlined,
  FrownOutlined,
  SmileOutlined,
} from '@ant-design/icons';

import './headsetDetails.scss';
import moment from 'moment';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../shape';

const HeadsetDetails = (props) => {
  const {
    selected, item, compareMode, onClick, compareResult,
  } = props;

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getHeadsetAudience = (audience) => {
    if (audience === 1) return 'Public';
    if (audience === 2) return 'Enterprise';
    return '';
  };

  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_2127896_6o45tlw77tu.js', // icon-oculus, icon-steam
      '//at.alicdn.com/t/font_2127897_j99ayp2641j.js', //  icon-linux, icon-playstation
      '//at.alicdn.com/t/font_2127903_5gylz1jr8ko.js', // icon-playstation
      '//at.alicdn.com/t/font_2127905_8a27rwo6uni.js', // icon-vr-logo-windows-mr
    ],
  });

  const getClassName = (compareTarget) => {
    if (!compareResult) return '';
    if (compareResult[compareTarget].find((element) => element.id === item.id)) {
      return <SmileOutlined className="better" />;
    }
    return <FrownOutlined className="worst" />;
  };

  return (
    <HeadsetCard item={item} selected={selected} onClick={compareMode ? null : onClick}>
      {!compareMode ? null : (
        <Card className="headset-card-details">
          <Card.Grid className="headset-card-details-title" hoverable={false}>
            General Informations
            <span className="headset-card-details-title-smile">{getClassName('price')}</span>
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
            Target Audience
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">

            {item.audience
              ? getHeadsetAudience(item.audience) : null}

          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Price
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {`${item.price} $`}
          </Card.Grid>
          <Card.Grid
            className={`headset-card-details-title ${getClassName('screen')}`}
            hoverable={false}
          >
            Screen Specifications
            <div className="headset-card-details-title-smile">{getClassName('screen')}</div>
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            FOV
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {`${item.fov} °`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Refresh Rate
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {`${item.refreshrate} Hz`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Resolution per eyes
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {`${item.resolution.x} x ${item.resolution.y}`}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Pixel Density
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
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
            Tracking
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.tracking}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Controller
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.controller}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Hand Tracking
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.handtracking ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Eye Tracking
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.eyetracking ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Facial Recognition
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.facialrecognition ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Weight
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {`${item.weight} g`}
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
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Wireless
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.wireless ? <CheckOutlined /> : <CloseOutlined />}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Standalone
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.standalone ? (
              <>
                <Button type="primary" onClick={showDrawer} className="button-standalone">
                  Info
                </Button>
                <Drawer
                  title="Standalone Info"
                  placement="right"
                  className="drawer-standalone"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >

                  <Card className="card-drawer">
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      CPU
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {item.standalonespecs.cpu}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      GPU
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {item.standalonespecs.gpu}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      RAM
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {`${item.standalonespecs.ram} GB`}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      Storage
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {`${item.standalonespecs.storage} GB / ${item.standalonespecs.storage2} GB `}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      Expandable
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {item.standalonespecs.expandable ? <CheckOutlined /> : <CloseOutlined />}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      Battery life
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {`${item.standalonespecs.batterylife} H`}
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large-text">
                      Link to PC
                    </Card.Grid>
                    <Card.Grid hoverable={false} className="card-drawer-large">
                      {item.standalonespecs.link ? <CheckOutlined /> : <CloseOutlined />}
                    </Card.Grid>
                  </Card>

                </Drawer>
              </>
            ) : <CloseOutlined />}

          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-title">
            Software Requirement
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
                  case 'linux':
                    return <IconFont type="icon-linux" className="headset-card-details-logo" />;
                  case 'playstation':
                    return <IconFont type="icon-playstation" className="headset-card-details-logo" />;

                  default:
                    return '';
                }
              })
              : null}
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal-text">
            Platform
          </Card.Grid>
          <Card.Grid hoverable={false} className="headset-card-details-normal">
            {item.platform
              ? item.platform.map((element) => {
                const platform = element;
                switch (platform) {
                  case 'steam':
                    return <IconFont type="icon-steam" className="headset-card-details-logo" />;
                  case 'oculus':
                    return <IconFont type="icon-oculus" className="headset-card-details-logo" />;
                  case 'windows':
                    return <IconFont type="icon-vr-logo-windows-mr" className="headset-card-details-logo" />;
                  case 'playstation':
                    return <IconFont type="icon-playstation" className="headset-card-details-logo" />;

                  default:
                    return '';
                }
              })
              : null}
          </Card.Grid>

          <Card.Grid hoverable={false} className="headset-card-details-title">
            PC Requirement
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
          <Card.Grid hoverable={false} className="headset-card-details-normal">
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
