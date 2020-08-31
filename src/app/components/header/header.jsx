import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';

import './header.scss';
import { ReactComponent as Moon } from '../../../assets/images/moon.svg';

const { Header } = Layout;

const CustomHeader = (props) => {
  const { toggleNightMode, darkMode } = props;
  return (
    <Header>
      <Link to="/">
        <div className="logo" />
      </Link>
      <Menu theme='dark' mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Comparator</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/headsets">Headsets</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/wiki">Wiki</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/vr-games">VR Games</Link>
        </Menu.Item>
        <Menu.Item key="5">
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
};

CustomHeader.defaultProps = {
  toggleNightMode: () => console.warn('toggleSelected is not defined'),
  darkMode: false,
};

export default CustomHeader;
