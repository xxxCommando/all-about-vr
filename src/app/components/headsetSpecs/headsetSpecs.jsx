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

  const getLensType = (lens) => {
    if (lens === 1) return 'Fresnel';
    if (lens === 2) return 'Pancake';
    if (lens === 3) return 'Aspherical';
    if (lens === 4) return 'N/A';
    return '';
  };

  const getCrossOrValidIcon = (bool) => {
    if (bool === true) return <CheckOutlined />;
    if (bool === false) return <CloseOutlined />;
    return 'N/A';
  };

  return (
    <Card className="specs-headset-card-details">
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        General Information
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Date Release
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.releasedate ? moment.unix(item.releasedate.seconds).format('YYYY-MM-DD') : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Brand
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.brand ? item.brand : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Target Audience
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.audience ? getHeadsetAudience(item.audience) : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Retail Price
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.price ? `${item.price} $` : 'N/A'}
      </Card.Grid>
      <Card.Grid
        className="specs-headset-card-details-title "
        hoverable={false}
      >
        Display(s) Specifications
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#screen' }}>Display Type</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.screentype ? item.screentype : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#resolution' }}>Resolution per-eye</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {(item.resolution.x && item.resolution.y) ? `${item.resolution.x} x ${item.resolution.y}` : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#pixeldensity' }}>Pixel Density</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.pixeldensity ? `${item.pixeldensity} dpi` : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#refreshrate' }}>Refresh Rate</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.refreshrate ? `${item.refreshrate} Hz` : 'N/A'}
      </Card.Grid>

      <Card.Grid
        className="specs-headset-card-details-title"
        hoverable={false}
      >
        Optics
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Lens Type
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.lenses ? getLensType(item.lenses) : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#fov' }}>FOV - Vertical</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.fovv ? `${item.fovv} °` : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#fov' }}>FOV - Horizontal</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.fovh ? `${item.fovh} °` : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#ipd' }}>IPD Adjustement</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.ipd)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#diopter' }}>Adjustable Diopter</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.diopter)}
      </Card.Grid>

      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        Tracking Specifications
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#tracking' }}>Tracking Type</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.tracking ? item.tracking : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Controllers
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.controller ? item.controller : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#hand' }}>Hand Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.handtracking)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#eye' }}>Eye Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.eyetracking)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#facial' }}>Face Tracking</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.facialrecognition)}
      </Card.Grid>

      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        Hardware Specifications

      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Weight
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.weight ? `${item.weight} g` : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#flipup' }}>Flip-Up</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.flipup)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Build in Audio
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.audio)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        3,5mm Audio Jack
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.jack)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Build in Mic
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.mic)}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Wired Video
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.wired ? item.wired : 'N/A'}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        <Link to={{ pathname: '/wiki', hash: '#wireless' }}> Wireless Streaming</Link>
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {getCrossOrValidIcon(item.wireless)}
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
                  {item.standalonespecs.cpu ? item.standalonespecs.cpu : 'N/A'}
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large-text">
                  GPU
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large">
                  {item.standalonespecs.gpu ? item.standalonespecs.gpu : 'N/A'}
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large-text">
                  RAM
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large">
                  {item.standalonespecs.ram ? `${item.standalonespecs.ram} GB` : 'N/A'}
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
                  {getCrossOrValidIcon(item.standalonespecs.expandable)}
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large-text">
                  Battery life
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large">
                  {item.standalonespecs.batterylife ? `${item.standalonespecs.batterylife} H` : 'N/A'}
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large-text">
                  Link to PC
                </Card.Grid>
                <Card.Grid hoverable={false} className="card-drawer-large">
                  {getCrossOrValidIcon(item.standalonespecs.link)}
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
                return 'N/A';
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
                return 'N/A';
            }
          })
          : null}
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-title">
        <Link to={{ pathname: '/wiki', hash: '#pc' }}>Manufacturer PC Requirement</Link>
      </Card.Grid>

      <Card.Grid hoverable={false} className="specs-headset-card-details-large-text">
        CPU
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large">
        {item.requirements.cpu ? item.requirements.cpu : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large-text">
        GPU
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large">
        {item.requirements.gpu ? item.requirements.gpu : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        RAM
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.ram ? `${item.requirements.ram} GB` : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        USB
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.usb ? item.requirements.usb : 'N/A'}
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal-text">
        Video Port
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-normal">
        {item.requirements.video ? item.requirements.video : 'N/A'}
      </Card.Grid>
      <Card.Grid className="specs-headset-card-details-title" hoverable={false}>
        Comment
      </Card.Grid>
      <Card.Grid hoverable={false} className="specs-headset-card-details-large description">
        {item.comment ? item.comment : 'We don\'t have enough information on this headset to do a comment' }
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
