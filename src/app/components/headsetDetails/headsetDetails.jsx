import React from 'react';
import './headsetDetails.scss';

import { Card, Image } from 'antd';
import HeadsetCard from '../headsetCard';

class HeadsetDetails extends React.Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
    return (
      <div>

        <Card
          bordered
          title={this.props.item.name}
          cover={<Image src={this.props.item.img} preview={false} />}

   /* <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card> */

        />

      </div>
    );
  }
}

export default HeadsetDetails;
