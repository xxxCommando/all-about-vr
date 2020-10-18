import React from 'react';
import PropTypes from 'prop-types';
import {
  List, Typography, Layout,
} from 'antd';
import GameCard from '../../components/gameCard/gameCard';
import './games.scss';
import { GameShape } from '../../shape';

class Games extends React.Component {
  toggleSelected(id, selectorIndex = null) {
    const {
      items,
    } = this.props;
  }

  render() {
    const {
      items,
    } = this.props;

    return (
      <>

        <Layout>
          <Typography.Title level={1}>VR Games</Typography.Title>
          <List
            grid={{
              gutter: 16,
              column: 4,
              xs: 2,
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
        </Layout>

      </>
    );
  }
}

Games.propTypes = {
  items: PropTypes.arrayOf(GameShape),
};

Games.defaultProps = {
  items: [],
};

export default Games;
