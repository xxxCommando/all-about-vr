import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Button, Drawer,
} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Icon, { MenuOutlined } from '@ant-design/icons';

import './header.scss';
import { ReactComponent as Moon } from '../../../assets/images/moon.svg';
import { ReactComponent as LogoAllAboutVR } from '../../../assets/images/logo3.svg';
import { ReactComponent as LogoAllAboutVRNight } from '../../../assets/images/logoNight.svg';

const getPathname = (location) => location.pathname.split('/')[1];

const MenuNav = (props) => {
  const { mode, className, pathname } = props;
  return (
    <Menu
      theme="dark"
      mode={mode}
      className={className}
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
    </Menu>
  );
};

MenuNav.propTypes = {
  mode: PropTypes.string,
  className: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

MenuNav.defaultProps = {
  mode: '',
  className: '',
};

const ButtonDarkMode = (props) => {
  const { darkMode, toggleDarkMode } = props;
  return (
    <Button
      type="ghost"
      onClick={() => toggleDarkMode()}
      shape="circle"
      className={`right-button dark-mode ${darkMode ? 'dark' : 'light'}`}
      icon={<Icon component={Moon} />}
      size="large"
    />
  );
};

ButtonDarkMode.propTypes = {
  darkMode: PropTypes.bool.isRequired,
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
      toggleDarkMode, darkMode, location, doClear,
    } = this.props;
    const { visible } = this.state;
    const pathname = getPathname(location);
    return (
      <Layout.Header>
        <Link to="/" onClick={() => doClear()}>
          <div className="logo">
            {darkMode ? <LogoAllAboutVRNight /> : <LogoAllAboutVR />}

            <p>AllAboutVR</p>
          </div>
        </Link>
        <ButtonDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <MenuNav mode="horizontal" className="nav-menu" pathname={pathname} />
        {/* mobile */}
        <Button
          type="ghost"
          onClick={this.showDrawer}
          className={`right-button open-menu ${darkMode ? 'dark' : 'light'}`}
          icon={<MenuOutlined />}
          size="large"
        />
        <Drawer
          title="Menu"
          placement="right"
          className="drawer-mobile"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          footer={(<ButtonDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />)}
        >
          <MenuNav pathname={pathname} mode="vertical" />
        </Drawer>
      </Layout.Header>
    );
  }
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func,
  darkMode: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  doClear: PropTypes.func.isRequired,
};

Header.defaultProps = {
  toggleDarkMode: () => console.warn('toggleDarkMode is not defined'),
  darkMode: false,
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default withRouter(Header);
