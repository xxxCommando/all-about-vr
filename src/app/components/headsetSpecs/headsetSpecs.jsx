import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Drawer, Button } from 'antd';
import Icon, {
  CheckOutlined,
  CloseOutlined,
  AndroidOutlined,
  WindowsOutlined,
  AppleOutlined,

} from '@ant-design/icons';

import './headsetSpecs.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { HeadsetShape } from '../../shape';
import { ReactComponent as Playstation } from '../../../assets/images/playstation.svg';
import { ReactComponent as Linux } from '../../../assets/images/linux.svg';
import { ReactComponent as Oculus } from '../../../assets/images/oculus.svg';
import { ReactComponent as Steam } from '../../../assets/images/steam.svg';
import { ReactComponent as Windows } from '../../../assets/images/vr-logo-windows-mr.svg';

const HeadsetSpecs = (props) => {
  const {
    item,
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

  return (
    <Card className="specs-headset-card-details">
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        General Informations

      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Date Release
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.releasedate ? moment.unix(item.releasedate.seconds).format('YYYY-MM-DD') : ''}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Brand
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.brand}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Target Audience
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">

        {item.audience
          ? getHeadsetAudience(item.audience) : null}

      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Price
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.price} $`}
      </Card.Grid>
      <Card.Grid
        className="specs-headset-card-details-title"
        hoverable={false}
      >
        Screen Specifications

      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#fov' }}>FOV</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.fov} °`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#refreshrate' }}>Refresh Rate</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.refreshrate} Hz`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#resolution' }}>Resolution per eyes</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.resolution.x} x ${item.resolution.y}`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#pixeldensity' }}>Pixel Density</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.pixeldensity} dpi`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#screen' }}>Screen Type</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.screentype}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#ipd' }}>IPD Adjustement</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.ipd ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#flipup' }}>Flip-Up</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.flipup ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        Tracking Specifications

      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#tracking' }}>Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.tracking}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Controller
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.controller}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#hand' }}>Hand Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.handtracking ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#eye' }}>Eye Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.eyetracking ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#facial' }}>Facial Recognition</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.facialrecognition ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        Hardware Specifications

      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Weight
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.weight} g`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Build in Audio
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.audio ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Build in Mic
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.mic ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#wireless' }}> Wireless</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.wireless ? <CheckOutlined /> : <CloseOutlined />}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#standalone' }}>Standalone</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
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

                  {item.standalonespecs.storages.map((storage, index) => `${storage}  GB${item.standalonespecs.storages.length - 1 !== index ? ' / ' : ''}`) }
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
      <Card.Grid hoverable={false} className="specs-headset-card-details-title">
        Software Requirement
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        OS
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.os
          ? item.requirements.os.map((os) => {
            switch (os) {
              case 'windows':
                return <WindowsOutlined className="specs-headset-card-details-logo" id={os} />;
              case 'android':
                return <AndroidOutlined className="specs-headset-card-details-logo" id={os} />;
              case 'macos':
                return <AppleOutlined className="specs-headset-card-details-logo" id={os} />;
              case 'linux':
                return <Icon component={Linux} className="specs-headset-card-details-logo" id={os} />;
              case 'playstation':
                return <Icon component={Playstation} className="specs-headset-card-details-logo" id={os} />;

              default:
                return '';
            }
          })
          : null}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Platform
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.platform
          ? item.platform.map((platform) => {
            switch (platform) {
              case 'steam':
                return <Icon component={Steam} className="specs-headset-card-details-logo" id={platform} />;

              case 'oculus':
                return <Icon component={Oculus} className="specs-headset-card-details-logo" id={platform} />;

              case 'windows':
                return <Icon component={Windows} className="specs-headset-card-details-logo" id={platform} />;

              case 'playstation':
                return <Icon component={Playstation} className="specs-headset-card-details-logo" id={platform} />;

              default:
                return '';
            }
          })
          : null}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-title">
        <Link to={{ pathname: '/wiki', hash: '#pc' }}>PC Requirement</Link>
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-large-text">
        CPU
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large">
        {item.requirements.cpu}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large-text">
        GPU
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large">
        {item.requirements.gpu}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        RAM
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {`${item.requirements.ram} GB`}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        USB
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.usb}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Video Port
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.video}
      </Card.Grid>
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        What we think
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large description">
        {item.description}
      </Card.Grid>
    </Card>
  );
};

HeadsetSpecs.propTypes = {
  item: HeadsetShape,
  compareResult: PropTypes.shape({}),
};

HeadsetSpecs.defaultProps = {
  item: {},
  compareResult: null,
};

export default HeadsetSpecs;
