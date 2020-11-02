import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Button, Drawer,
} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Icon, { MenuOutlined } from '@ant-design/icons';

import './header.scss';
import { ReactComponent as Moon } from '../../../assets/images/moon.svg';
import { ReactComponent as LogoAllAboutVR } from '../../../assets/images/logo.svg';
import packageJson from '../../../../package.json';

const getPathname = (location) => location.pathname.split('/')[1];

const MenuNav = (props) => {
  const {
    clearFilters, mode, className, pathname,
  } = props;

  return (
    <Menu
      theme="dark"
      mode={mode}
      className={className}
      selectedKeys={[pathname.length ? pathname : 'home']}
    >
      <Menu.Item key="home">
        <Link to="/" onClick={() => clearFilters()}>Comparator</Link>
      </Menu.Item>
      <Menu.Item key="headsets">
        <Link to="/headsets" onClick={() => clearFilters()}>Headsets</Link>
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
    </Menu>
  );
};

MenuNav.propTypes = {
  clearFilters: PropTypes.func.isRequired,
  mode: PropTypes.string,
  className: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

MenuNav.defaultProps = {
  mode: '',
  className: '',
};

const ButtonDarkMode = (props) => {
  const { toggleDarkMode } = props;
  return (
    <Button
      type="ghost"
      onClick={() => toggleDarkMode()}
      shape="circle"
      icon={<Icon component={Moon} />}
      size="large"
    />
  );
};

ButtonDarkMode.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      clearFilters, toggleDarkMode, darkMode, location, doClear,
    } = this.props;
    const { visible } = this.state;
    const pathname = getPathname(location);
    return (
      <Layout.Header className="header">
        <Link to="/" onClick={() => doClear()}>
          <div className="logo">
            <LogoAllAboutVR />
            <p>AllAboutVR</p>
          </div>
        </Link>
        <div className="right desktop">
          <span className="version"><a href={`https://github.com/Bleuh/all-about-vr/tree/${packageJson.version}`} target="_blank" rel="noopener noreferrer">{`v${packageJson.version}`}</a></span>
          <ButtonDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
        <MenuNav mode="horizontal" className="nav-menu" pathname={pathname} clearFilters={clearFilters} />
        {/* mobile */}
        <div className="right mobile">
          <Button
            type="ghost"
            onClick={this.showDrawer}
            className={`open-menu ${darkMode ? 'dark' : 'light'}`}
            icon={<MenuOutlined />}
            size="large"
          />
        </div>
        <Drawer
          title="Menu"
          placement="right"
          className="drawer-mobile"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          footer={(
            <div className="right">
              <span className="version"><a href={`https://github.com/Bleuh/all-about-vr/tree/${packageJson.version}`} target="_blank" rel="noopener noreferrer">{`v${packageJson.version}`}</a></span>
              <ButtonDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>
          )}
        >
          <MenuNav pathname={pathname} mode="vertical" />
        </Drawer>
      </Layout.Header>
    );
  }
}

Header.propTypes = {
  clearFilters: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  doClear: PropTypes.func.isRequired,
};

export default withRouter(Header);
