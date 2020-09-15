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

  const columnsInfo = [
    {
      title: 'General Informations',
      dataIndex: 'specs',
      key: 'specs',

    },
    {
      title: '',
      dataIndex: 'info',
      key: 'info',
    },
  ];

  const columnsScreen = [
    {
      title: 'Screen Specifications',
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

  const columnsSpecs = [
    {
      title: 'Other Specifications',
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

  const columnsReview = [
    {
      title: 'What we think',
      dataIndex: 'review',
      key: 'review',

    },

  ];

  const dataInfo = [
    {
      key: '1',
      specs: 'Brand',
      info: item.brand,
    },
    {
      key: '2',
      specs: 'Date Release',
      info: item.releasedate ? moment(item.releasedate.toDate()).calendar() : '',
    },
    {
      key: '3',
      specs: 'Price',
      info: `${item.price} $`,
    },

  ];

  const dataScreen = [

    {
      key: '1',
      specs: 'FOV',
      info: `${item.fov} °`,
    },
    {
      key: '2',
      specs: 'Refresh Rate',
      info: `${item.refreshrate} Hz`,
    },
    {
      key: '3',
      specs: 'Resolution per eyes',
      info: item.res,
    },
    {
      key: '4',
      specs: 'Pixel density',
      info: `${item.pixeldensity} dpi`,
    },
    {
      key: '5',
      specs: 'Screen Type',
      info: item.screentype,
    },
    {
      key: '6',
      specs: 'IPD Adjustement',
      info: item.ipd ? 'Yes' : 'No',
    },
    {
      key: '7',
      specs: 'Flip-Up',
      info: item.flipup ? 'Yes' : 'No',
    },

  ];

  const dataSpecs = [

    {
      key: '1',
      specs: 'Weight',
      info: `${item.weight} g`,
    },
    {
      key: '2',
      specs: 'Tracking',
      info: item.tracking,
    },
    {
      key: '3',
      specs: 'Wireless',
      info: item.wireless ? 'Yes' : 'No',
    },
    {
      key: '3',
      specs: 'Build in Audio',
      info: item.audio ? 'Yes' : 'No',
    },
    {
      key: '4',
      specs: 'Build in mic',
      info: item.mic ? 'Yes' : 'No',
    },
    {
      key: '5',
      specs: 'PC Requirement',
      info: item.requirement,
    },

  ];

  const dataReview = [
    {
      key: '1',
      specs: item.description,
      review: item.description,
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

          className={getClassName('price')}
        >
          <Table columns={columnsInfo} dataSource={dataInfo} pagination={false} />
          <Table columns={columnsScreen} dataSource={dataScreen} pagination={false} />
          <Table columns={columnsSpecs} dataSource={dataSpecs} pagination={false} />
          <Table columns={columnsReview} dataSource={dataReview} pagination={false} />
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
