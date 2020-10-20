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
    <>
      <Layout>
        <Typography.Title level={1}>VR Games</Typography.Title>
        <Divider />
        <p className="price-info">* Here is a non-exhaustive list of VR games.</p>

        <List
          grid={{
            gutter: 16,
            column: 4,
            sm: 2,
            lg: 3,
          }}
        >
          {items.length === 0 ? (
            <div className="ant-row headsets">
              {waitData.map((name) => (
                <div className="normal-mode" key={name}>
                  <List.Item>
                    <div className="headset-card">
                      <Card loading title={name} />
                    </div>
                  </List.Item>
                </div>
              ))}
            </div>
          ) : (

            <List
              grid={{
                gutter: 16,
                column: 4,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
              }}
              dataSource={items}
              renderItem={(item) => (
                <List.Item>
                  <GameCard item={item} />
                </List.Item>
              )}
            />

          )}
        </List>

      </Layout>

    </>
  );
};

Games.propTypes = {
  items: PropTypes.arrayOf(GameShape),
};

Games.defaultProps = {
  items: [],
};

export default Games;
