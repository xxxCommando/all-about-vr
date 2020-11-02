import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Layout, Divider, Table, Image,
} from 'antd';
import { Resizable } from 'react-resizable';
import './headsetsTab.scss';
import { HeadsetShape } from '../../shape';
import ButtonDrawer from '../../components/buttonDrawer';
import FilterSider from '../../components/filterSider';

const { Sider } = Layout;

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
          role="presentation"
          aria-label="resizable"
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

ResizableTitle.propTypes = {
  onResize: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
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
            width: 100,
            responsive: ['sm'],
            align: 'center',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            width: 100,
            align: 'center',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 100,
            sorter: (a, b) => a.price - b.price,
            responsive: ['md'],
            align: 'center',
          },
          {
            title: 'Res. per eyes',
            dataIndex: 'resolution',
            width: 100,
            align: 'center',
            sorter: (a, b) => {
              const one = a.resolution.split('x');
              const two = b.resolution.split('x');
              const ax = one[0];
              const ay = one[1];
              const bx = two[0];
              const by = two[1];
              return (ax * ay) - (bx * by);
            },
          },
          {
            title: 'Refresh Rate',
            dataIndex: 'refreshrate',
            width: 100,
            align: 'center',
            sorter: (a, b) => a.refreshrate - b.refreshrate,

          },
          {
            title: 'FOV',
            dataIndex: 'fov',
            width: 100,
            align: 'center',
            sorter: (a, b) => a.fov - b.fov,
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

        const data = (headsets) => headsets.map((item) => ({
          img: <Image src={item.img} />,
          name: item.name,
          price: `${item.price} $`,
          resolution: `${item.resolution.x}x${item.resolution.y}`,
          refreshrate: `${item.refreshrate} Hz`,
          fov: `${item.fov}°`,
        }));

        const { state } = this;
        const colState = state.columns;
        const columns = colState.map((col, index) => ({
          ...col,
          onHeaderCell: (column) => ({
            width: column.width,
            onResize: this.handleResize(index),
          }),
        }));

        return (
          <>
            <Layout className="headsetTab">

              <Sider width={250} className="sider">
                <FilterSider />
              </Sider>
              <Layout.Content className="layout-content">

                <Typography.Title level={1} className="title">Headsets</Typography.Title>
                <Divider />
                <div className="filter">
                  <ButtonDrawer />
                </div>

                <Table size="small" responsive bordered components={this.components} columns={columns} dataSource={data(items)} />
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
