import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import './page404.scss';

class Page404 extends React.Component {
  componentDidMount() {
    const { toggleMainClass } = this.props;
    toggleMainClass('layout-404');
  }

  componentWillUnmount() {
    const { toggleMainClass } = this.props;
    toggleMainClass('layout-404');
  }

  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={(
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        )}
      />
    );
  }
}

Page404.propTypes = {
  toggleMainClass: PropTypes.func.isRequired,
};

export default Page404;
