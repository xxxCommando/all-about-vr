import React from 'react';
import { Card } from 'antd';

import './headsetDetails.scss';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../../shape';

const HeadsetDetails = (props) => {
  const { item } = props;
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  return (
    <div>
      <HeadsetCard item={item}>
        <Card title="Resolution">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            Content
          </Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </HeadsetCard>
    </div>
  );
};

HeadsetDetails.propTypes = {
  item: HeadsetShape,
};

HeadsetDetails.defaultProps = {
  item: {},
};

export default HeadsetDetails;
