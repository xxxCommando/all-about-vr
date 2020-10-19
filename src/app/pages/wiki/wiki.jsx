import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse, Layout, Typography, Divider,
} from 'antd';
import { withRouter } from 'react-router-dom';
import './wiki.scss';

const { Panel } = Collapse;

const comparison = `
  To compare headset we use a simple algorithm that take the best value from a field. In some sections, one field can have a highter weight than an other. For example, the comparison of the section "General Information" only compare the price but in the section "Screen Specifications" each field are compared with different weight.
`;
const fov = `
  FOV mean Field Of View, it's the extent of the observable world that is seen at any given moment. The most common FOV on VR headsets is 110°.
`;
const refreshrate = `
The refresh rate is the number of times the monitor updates with new images each second. The higher the refresh rate, the smoother the delivered visuals and the powerfull you're computer must be.
`;
const resolution = `
The display resolution of a display device is the number of distinct pixels in each dimension that can be displayed. It is usually quoted as width × height, with the units in pixels: for example, 1024 × 768 means the width is 1024 pixels and the height is 768 pixels. The higher the resolution, the higher the delivered visuals details and the powerfull you're computer must be.
`;
const pixeldensity = `
Pixels per inch (ppi) and pixels per centimetre (ppcm or pixels/cm) are measurements of the pixel density of an electronic image device. PPI (monitor) = Number of Pixels / Size in inches
`;
const screen = `
  VR headsets can have differents type of screen. The most common displays used on VR headsets are OLED panels are generally preferred from a visual perspective as they provide greater contrast, resulting in deeper colors. LCD panels, however, generally produce brighter results thanks to the high peak intensity they generate with their backlight.
`;
const ipd = `
  IPD stands for interpupillary distance—which simply means the distance between the center of your eyes. Some headsets provide mechanical IPD adjustment and others software adjustable ipd adjustement. In our comparator we considere that only the mechanical IPD adjustment is valid.
`;
const flipup = `
  Flipup mean that you can lift the front part of the VR Headset without removing the headset.
`;
const tracking = `
  There are two type of tracking, Inside-Out and Outside-In. Inside-Out mean the VR headset have cameras on the headset to track your controllers (example : Oculus rift S). Outside-in mean you have to place camera in your room to track your controllers (example : Valve Index). 
`;
const hand = `
  Hand tracking mean that the VR Headset can track your hand without controller. For example, the Oculus Quest with his internal camera, can track your hands and you can play some games without controllers.
`;
const eye = `
  Eye tracking mean that the VR Headset have an internal system to track the position of your eyes. This technology can improve your experience in VR.
`;
const facial = `
Facial recognition means that a camera will track your facial expressions which can be used in-game, specially social games.
`;
const wireless = `
 Wireless mean that the VR Headset can natively be use without cable (example: Oculus Quest).
`;
const standalone = `
  Standalone mean that the VR headset can work without computer because he have internal hardware and battery (example : Oculus Quest). Some standalone VR headset can be linked to a computer to profit of the power of the computer.
`;
const pc = `
  PC Requirement come from manufacturer of the VR headset. But we strongly recommend you to have better specs than the requirement. VR headsets have screen(s) with big resolution and high refresh rate, you need to have a powerfull GPU and CPU and a least 8GB of ram.
`;

class Wiki extends React.Component {
  constructor(props) {
    super(props);
    const { hash } = props.location;
    const newHash = hash.substring(1);
    this.state = {
      selector: newHash || ['comparison', 'fov', 'refreshrate', 'resolution', 'pixeldensity', 'screen', 'ipd', 'flipup', 'tracking', 'hand', 'eye', 'facial', 'wireless', 'standalone', 'pc'],
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { hash } = location;
    const newHash = hash.replace('#', '');
    const element = document.getElementById(newHash);
    if (element) element.scrollIntoView();
  }

  render() {
    const {
      selector,
    } = this.state;
    return (
      <Layout.Content className="layout-content-article">

        <Typography.Title level={1}>Wiki</Typography.Title>
        <section className="wiki">
          <Collapse ghost defaultActiveKey={selector}>
            <Panel id="comparison" header="How do we compare VR headsets ?" key="comparison">
              <p>{comparison}</p>
            </Panel>
            <Divider />
            <Panel id="fov" header="What is FOV ?" key="fov">
              <p>{fov}</p>
            </Panel>
            <Divider />
            <Panel id="refreshrate" header="What is refresh rate ?" key="refreshrate">
              <p>{refreshrate}</p>
            </Panel>
            <Divider />
            <Panel id="resolution" header="What is resolution per eyes ?" key="resolution">
              <p>{resolution}</p>
            </Panel>
            <Divider />
            <Panel id="pixeldensity" header="What is pixel density ?" key="pixeldensity">
              <p>{pixeldensity}</p>
            </Panel>
            <Divider />
            <Panel id="screen" header="What are the different screen type ?" key="screen">
              <p>{screen}</p>
            </Panel>
            <Divider />
            <Panel id="ipd" header="What is IPD Adjustement ?" key="ipd">
              <p>{ipd}</p>
            </Panel>
            <Divider />
            <Panel id="flipup" header="What are Flip-Up Headsets ?" key="flipup">
              <p>{flipup}</p>
            </Panel>
            <Divider />
            <Panel id="tracking" header="What are the different tracking system ?" key="tracking">
              <p>{tracking}</p>
            </Panel>
            <Divider />
            <Panel id="hand" header="What is hand tracking ?" key="hand">
              <p>{hand}</p>
            </Panel>
            <Divider />
            <Panel id="eye" header="What is eye tracking ?" key="eye">
              <p>{eye}</p>
            </Panel>
            <Divider />
            <Panel id="facial" header="What is facial recognition ?" key="facial">
              <p>{facial}</p>
            </Panel>
            <Divider />
            <Panel id="wireless" header="What wireless mean ?" key="wireless">
              <p>{wireless}</p>
            </Panel>
            <Divider />
            <Panel id="standalone" header="What standalone mean ?" key="standalone">
              <p>{standalone}</p>
            </Panel>
            <Divider />
            <Panel id="pc" header="Where are come from PC Requirement ?" key="pc">
              <p>{pc}</p>
            </Panel>

          </Collapse>
        </section>

      </Layout.Content>

    );
  }
}

Wiki.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default withRouter(Wiki);
