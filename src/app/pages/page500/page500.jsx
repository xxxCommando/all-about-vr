import React from 'react';
import { Result, Button } from 'antd';
import './page500.scss';
import { Link } from 'react-router-dom';

const Page500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={(
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
)}
  />
);

export default Page500;
