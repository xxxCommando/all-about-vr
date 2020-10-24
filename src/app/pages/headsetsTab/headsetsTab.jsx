import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Layout, Divider, Table, Menu, Image,
} from 'antd';
import { Resizable } from 'react-resizable';
import './headsetsTab.scss';
import { HeadsetShape } from '../../shape';

const { Sider } = Layout;

const { SubMenu } = Menu;

const ResizableTitle = (props) => {
  const {
    onResize, width, ...restProps
  } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={(
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        )}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class HeadsetsTab extends React.Component {
    components = {
      header: {
        cell: ResizableTitle,
      },
    };

    constructor(props) {
      super(props);
      this.state = {
        columns: [
          {
            title: 'Headset',
            dataIndex: 'img',
            width: 200,
          },
          {
            title: 'Name',
            dataIndex: 'name',
            width: 100,
            sorter: (a, b) => a.amount - b.amount,
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 100,
            sorter: (a, b) => a.amount - b.amount,
          },
          {
            title: 'Res. per eyes',
            dataIndex: 'resolution',
            width: 100,
          },
          {
            title: 'Refresh Rate',
            key: 'refreshrate',
            width: 100,
          },
          {
            title: 'FOV',
            key: 'fov',
            width: 100,
          },
        ],
      };
    }

      handleResize = (index) => (e, { size }) => {
        this.setState(({ columns }) => {
          const nextColumns = [...columns];
          nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
          };
          return { columns: nextColumns };
        });
      };

      render() {
        const {
          items,
        } = this.props;

        const data = (item) => {
          const array = [];
          item.map((obj) => array.push(({
            img: <Image src={obj.img} />,
            name: obj.name,
            price: obj.price,
            resolution: `${obj.resolution.x} x ${obj.resolution.y}`,
            refreshrate: obj.refreshrate,
            fov: obj.fov,
          })));
          return array;
        };

        const columns = this.state.columns.map((col, index) => ({
          ...col,
          onHeaderCell: (column) => ({
            width: column.width,
            onResize: this.handleResize(index),
          }),
        }));

        return (
          <>
            <Layout>

              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout.Content className="layout-content">

                <Typography.Title level={1}>Headsets</Typography.Title>
                <Divider />

                <Table bordered components={this.components} columns={columns} dataSource={data(items)} />
              </Layout.Content>
            </Layout>
          </>
        );
      }
}

HeadsetsTab.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
};

HeadsetsTab.defaultProps = {
  items: [],
};

export default HeadsetsTab;
