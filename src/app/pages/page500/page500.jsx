import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import './page500.scss';

class Page500 extends React.Component {
  componentDidMount() {
    const { toggleClassName } = this.props;
    toggleClassName('layout-500');
  }

  componentWillUnmount() {
    const { toggleClassName } = this.props;
    toggleClassName('layout-500');
  }

  render() {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        className="layout-500"
        extra={(
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        )}
      />
    );
  }
}

Page500.propTypes = {
  toggleClassName: PropTypes.func.isRequired,
};

export default Page500;
