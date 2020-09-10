import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';
import { Link } from 'react-router-dom';

import './headsetDetails.scss';
import moment from 'moment';
import HeadsetCard from '../headsetCard';
import { HeadsetShape } from '../../../shape';

const HeadsetDetails = (props) => {
  const {
    selected, item, compareMode, onClick, compareResult,
  } = props;

  const columns = [
    {
      title: 'Specs',
      dataIndex: 'specs',
      key: 'specs',
      render: (text) => <Link to="/wiki">{text}</Link>,
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
      info: item.releasedate ? moment(item.releasedate.toDate()).calendar() : '',
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
        <Card
          title="Specification"
          className={getClassName('price')}
        >
          <Table columns={columns} dataSource={data} pagination={false} />
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
