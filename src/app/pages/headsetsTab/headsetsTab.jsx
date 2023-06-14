import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Layout, Divider, Table, Image, Button,
} from 'antd';
import { Resizable } from 'react-resizable';
import './headsetsTab.scss';
import { ClearOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { HeadsetShape } from '../../shape';
import ButtonDrawer from '../../components/buttonDrawer';
import Filters from '../../components/filters';

const { Sider } = Layout;

const ResizableTitle = (props) => {
  const {
    onResize,
    width,
    children,
    className,
    colSpan,
    rowSpan,
    style,
    title,
    onClick,
  } = props;

  if (!width) {
    return (
      <th
        className={className}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={style}
        title={title}
        onClick={onClick}
      >
        {children}
      </th>
    );
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
      <th
        className={className}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={style}
        title={title}
        onClick={onClick}
      >
        {children}
      </th>
    </Resizable>
  );
};

ResizableTitle.propTypes = {
  onResize: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  colSpan: PropTypes.element.isRequired,
  rowSpan: PropTypes.element.isRequired,
  style: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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
          sorter: (a, b) => {
            const one = a.price.split(' ');
            const two = b.price.split(' ');
            const aPrice = one[0];
            const bPrice = two[0];
            return aPrice - bPrice;
          },
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
            return ax * ay - bx * by;
          },
        },
        {
          title: 'Refresh Rate',
          dataIndex: 'refreshrate',
          width: 100,
          align: 'center',
          sorter: (a, b) => {
            const one = a.refreshrate.split(' ');
            const two = b.refreshrate.split(' ');
            const aRefresh = one[0];
            const bRefresh = two[0];
            return aRefresh - bRefresh;
          },
        },
        {
          title: 'FOV',
          dataIndex: 'fov',
          ellipsis: true,
          width: 100,
          align: 'center',
          sorter: (a, b) => {
            const one = a.fov.split(' ');
            const two = b.fov.split(' ');
            const aFov = one[0];
            const bFov = two[0];
            return aFov - bFov;
          },
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

  doClear = () => {
    const { clearFilters } = this.props;
    clearFilters();
  };

  render() {
    const { items, isFiltered } = this.props;

    const data = (headsets) => headsets.map((item) => ({
      img: <Image src={item.img} />,
      name: <Link to={`/headset/${item.id}`}>{`${item.name}`}</Link>,
      price: `${item.price} $`,
      resolution: `${item.resolution.x}x${item.resolution.y}`,
      refreshrate: `${item.refreshrate} Hz`,
      fov: `V${item.fovv} H${item.fovh} °`,
    }));

    const { columns } = this.state;
    const columnsRezisable = columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Layout className="headsetTab">
        <Sider width={250} className="sider">
          <div className="filters-container">
            <Filters />
            {isFiltered ? (
              <Button
                type="text"
                className="button-custom"
                onClick={() => this.doClear()}
              >
                Reset all filters
                <ClearOutlined />
              </Button>
            ) : null}
          </div>
        </Sider>
        <Layout.Content className="layout-content">
          <Typography.Title level={1} className="title">
            Headsets
          </Typography.Title>
          <Divider />
          <div className="filter">
            <ButtonDrawer />
          </div>

          <Table
            size="small"
            responsive
            bordered
            components={this.components}
            columns={columnsRezisable}
            dataSource={data(items)}
          />
        </Layout.Content>
      </Layout>
    );
  }
}

HeadsetsTab.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
  isFiltered: PropTypes.bool.isRequired,
  clearFilters: PropTypes.bool.isRequired,
};

HeadsetsTab.defaultProps = {
  items: [],
};

export default HeadsetsTab;
