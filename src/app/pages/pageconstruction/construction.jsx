import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import './construction.scss';

class Construction extends React.Component {
  componentDidMount() {
    const { toggleMainClass } = this.props;
    toggleMainClass('layout-500');
  }

  componentWillUnmount() {
    const { toggleMainClass } = this.props;
    toggleMainClass('layout-500');
  }

  render() {
    return (
      <Result
        icon={<FormatPainterOutlined />}
        title="This page is under construction and is coming soon!"
        extra={(
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        )}
      />
    );
  }
}

Construction.propTypes = {
  toggleMainClass: PropTypes.func.isRequired,
};

export default Construction;
