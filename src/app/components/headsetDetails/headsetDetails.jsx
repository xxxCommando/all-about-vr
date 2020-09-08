import React from 'react';
import {
  Card, Table, Tag, Space,
} from 'antd';

import './headsetDetails.scss';
import moment from 'moment';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../../shape';

const HeadsetDetails = (props) => {
  const { item } = props;
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  console.log(item);

  const columns = [
    {
      title: 'Specs',
      dataIndex: 'specs',
      key: 'specs',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '',
      dataIndex: 'info',
      key: 'info',
    },
  ];

  const data = [
    {
      key: '1',
      specs: 'Date Release',
      info: moment(item.releasedate.toDate()).calendar(),
    },
    {
      key: '2',
      specs: 'Price',
      info: item.price,
    },
    {
      key: '3',
      specs: 'Something',
      info: item.name,

    },
  ];

  return (
    <div>
      <HeadsetCard item={item}>
        <Card title="Specification">
          <Table columns={columns} dataSource={data} pagination={false} />
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
