import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Icon from '@ant-design/icons';

import './header.scss';
import { ReactComponent as Moon } from '../../../assets/images/moon.svg';

const getPathname = (location) => location.pathname.split('/')[1];

const Header = (props) => {
  const { toggleDarkMode, darkMode, location } = props;
  const pathname = getPathname(location);
  return (
    <Layout.Header>
      <Link to="/">
        <div className="logo" />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        className="nav-menu"
        selectedKeys={[pathname.length ? pathname : 'home']}
      >
        <Menu.Item key="home">
          <Link to="/">Comparator</Link>
        </Menu.Item>
        <Menu.Item key="headsets">
          <Link to="/headsets">Headsets</Link>
        </Menu.Item>
        <Menu.Item key="wiki">
          <Link to="/wiki">Wiki</Link>
        </Menu.Item>
        <Menu.Item key="vr-games">
          <Link to="/vr-games">VR Games</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Button
          type="ghost"
          onClick={() => toggleDarkMode()}
          shape="circle"
          className={`night-mode ${darkMode ? 'dark' : 'light'}`}
          icon={<Icon component={Moon} />}
          size="large"
        />
      </Menu>
    </Layout.Header>
  );
};

Header.propTypes = {
  toggleDarkMode: PropTypes.func,
  darkMode: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Header.defaultProps = {
  toggleDarkMode: () => console.warn('toggleDarkMode is not defined'),
  darkMode: false,
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default withRouter(Header);
