import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';

import './header.scss';
import { ReactComponent as Moon } from '../../../assets/images/moon.svg';

const { Header } = Layout;

const CustomHeader = (props) => {
  const { toggleNightMode, darkMode, location } = props;
  const pathname = location.pathname.split('/')[1];
  return (
    <Header>
      <Link to="/">
        <div className="logo" />
      </Link>
      <Menu theme="dark" mode="horizontal" className="nav-menu" defaultSelectedKeys={[pathname.length ? pathname : 'home']}>
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
          onClick={() => toggleNightMode()}
          shape="circle"
          className={`night-mode ${darkMode ? 'dark' : 'light'}`}
          icon={<Icon component={Moon} />}
          size="large"
        />
      </Menu>
    </Header>
  );
};

CustomHeader.propTypes = {
  toggleNightMode: PropTypes.func,
  darkMode: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

CustomHeader.defaultProps = {
  toggleNightMode: () => console.warn('toggleSelected is not defined'),
  darkMode: false,
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default withRouter(CustomHeader);