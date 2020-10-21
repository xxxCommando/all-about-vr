import React from 'react';
import PropTypes from 'prop-types';
import {
  List, Typography, Layout, Divider, Card,
} from 'antd';
import GameCard from '../../components/gameCard/gameCard';
import './games.scss';
import { GameShape } from '../../shape';

const waitData = [...Array(12).keys()].map((index) => `Game ${index}`);

const Games = (props) => {
  const { items } = props;

  return (
    <Layout.Content className="layout-content">
      <Typography.Title level={1}>VR Games</Typography.Title>
      <Divider />
      <p className="price-info">* Here is a non-exhaustive list of VR games.</p>

      <List
        grid={{
          gutter: 16,
          column: 4,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
        }}
        className="list-card-games"
        dataSource={items.length === 0 ? waitData : items}
        renderItem={(item) => (
          <List.Item>
            {items.length === 0 ? <Card loading title={item} /> : <GameCard item={item} />}
          </List.Item>
        )}
      />
    </Layout.Content>
  );
};

Games.propTypes = {
  items: PropTypes.arrayOf(GameShape),
};

Games.defaultProps = {
  items: [],
};

export default Games;
