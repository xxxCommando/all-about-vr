import React from 'react';
import PropTypes from 'prop-types';
import {
  Result, Button, Image, Row, Col, Divider,
} from 'antd';
import { Link } from 'react-router-dom';

import './headset.scss';

const Headset = (props) => {
  const {
    item,
  } = props;

  return (

    <div className="headset">
      <h2>{item.name}</h2>

      <br />

      <div className="wrapper">

        <div>
          <Image width={300} src={item.img} preview={false} alt={item.name} />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

      </div>
      <hr />
      <div className="wrapper">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div>
          <Image width={300} src={item.img} preview={false} alt={item.name} />
        </div>
      </div>
      <hr />
      <div className="wrapper">
        <div>
          <Image width={300} src={item.img} preview={false} alt={item.name} />
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>

    </div>

  );
};

export default Headset;
