import React from 'react';
import PropTypes from 'prop-types';
import './headsetList.scss';

import { List, Card, Image } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

class HeadsetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      compareMode: false,
    };
  }

  toggleSelected(id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    if (selectedIndex !== -1) {
      selected.splice(selectedIndex, 1);
      this.setState({ selected, compareMode: false });
    } else {
      const newSelected = [...selected, id];
      this.setState({ selected: newSelected, compareMode: newSelected.length === 2 });
    }
  }

  render() {
    const { items } = this.props;
    const { selected, compareMode } = this.state;
    return (
      <div>
        <h1>{ compareMode ? 'Compare' : 'List' }</h1>
        <List
          grid={{
            gutter: 16,
            column: compareMode ? 2 : 4,
          }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                bordered
                style={selected.includes(item.id) ? { backgroundColor: 'grey' } : {}}
                cover={<Image src={item.img} preview={false} />}
                actions={[
                  selected.includes(item.id) ? (
                    <MinusCircleOutlined
                      key="compare"
                      onClick={() => this.toggleSelected(item.id)}
                    />
                  ) : (
                    <PlusCircleOutlined
                      key="compare"
                      onClick={() => this.toggleSelected(item.id)}
                      disabled={compareMode}
                    />
                  ),
                ]}
              >
                <Card.Meta title={item.name} description={`${item.price} $`} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

HeadsetList.propTypes = {
  items: PropTypes.arrayOf,
};

HeadsetList.defaultProps = {
  items: [],
};

export default HeadsetList;
