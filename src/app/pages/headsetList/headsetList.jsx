import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  List, Typography, Divider, Layout, Row, Col, Card,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../shape';

import HeadsetDetails from '../../components/headsetDetails';
import AutoCompleteHeadset from '../../components/autoCompleteHeadset';
import BackTopCustom from '../../components/backTopCustom';

import { MAX_SELECT } from '../../redux/compare/reducers/compare';

const waitData = [...Array(12).keys()].map((index) => `Headset ${index}`);

class HeadsetList extends React.Component {
  toggleSelected(id, selectorIndex = null) {
    const {
      items,
      selected,
      selectedIds,
      addMapping,
      removeMapping,
      add,
      remove,
      doCompare,
      compareMode,
      setCompareMode,
    } = this.props;
    if (selected[id]) {
      remove(id);
      removeMapping(id, selectorIndex);
      if (compareMode) setCompareMode(false);
    } else {
      if (selectedIds.length === MAX_SELECT) return;
      const selectedItem = items.find((item) => item.id === id);
      const isFull = selectedIds.length + 1 === MAX_SELECT;
      addMapping(selectedItem, selectorIndex);
      add(selectedItem, id);
      if (isFull) {
        doCompare();
        setCompareMode(isFull);
      }
    }
  }

  render() {
    const {
      items, compareMode, compareResult, inputMapping, selectedIds, selected, doClear,
    } = this.props;

    return (
      <>
        <Helmet>
          <title>Headset comparator - AllAboutVR</title>
          <meta
            name="description"
            content="Easier way to compare headset and find your best setup for VR ! Compare price, resolution, etc TODO"
          />
        </Helmet>
        <Typography.Title level={1}>Headset comparator</Typography.Title>
        <Divider orientation="left">Search headsets to compare</Divider>
        <Layout>
          <Row align="middle" justify="space-around" className="auto-complete-wrapper">
            <Col>
              <AutoCompleteHeadset
                items={items}
                itemSelected={inputMapping[0]}
                alreadySelected={selectedIds}
                placeholder="Headset 1"
                onChange={(id) => this.toggleSelected(id, 0)}
                disabled={items.length === 0}
              />
            </Col>
            <Col className="vs-animation">
              <div className={compareMode ? 'compare-mode' : 'normal-mode'}>
                <span>V</span>
              </div>
              <div className={compareMode ? 'compare-mode' : 'normal-mode'}>
                <span>S</span>
              </div>
            </Col>
            <Col>
              <AutoCompleteHeadset
                items={items}
                itemSelected={inputMapping[1]}
                alreadySelected={selectedIds}
                placeholder="Headset 2"
                onChange={(id) => this.toggleSelected(id, 1)}
                disabled={items.length === 0}
              />
            </Col>
          </Row>
        </Layout>

        <Divider orientation="left">
          {compareMode ? 'Compare mode' : 'Select 2 headsets to compare'}
        </Divider>
        <p className="price-info">* Prices of headsets are average prices of all necessary elements to use the headset (headset, controllers, base-station).</p>
        <Layout>
          <List
            grid={{
              gutter: 16,
              column: compareMode ? 2 : 4,
              sm: 2,
              lg: compareMode ? 2 : 3,
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
              <ReactCSSTransitionGroup
                transitionName="fade-headsets"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={300}
                className="ant-row headsets"
              >
                {items.map((item) => (compareMode && !selected[item.id] ? undefined : (
                  <div className={compareMode ? 'compare-mode' : 'normal-mode'} key={item.id}>
                    <List.Item>
                      <HeadsetDetails
                        selected={selected[item.id]}
                        item={item}
                        compareMode={compareMode}
                        onClick={(id) => this.toggleSelected(id)}
                        compareResult={compareResult}
                      />
                    </List.Item>
                  </div>
                )))}
              </ReactCSSTransitionGroup>
            )}
          </List>
        </Layout>
        <BackTopCustom onClick={doClear} icon={compareMode ? <DeleteOutlined /> : null} />
      </>
    );
  }
}

HeadsetList.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
  selected: PropTypes.shape().isRequired,
  inputMapping: PropTypes.shape().isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  compareMode: PropTypes.bool.isRequired,
  compareResult: PropTypes.shape().isRequired,
  addMapping: PropTypes.func.isRequired,
  removeMapping: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  doCompare: PropTypes.func.isRequired,
  setCompareMode: PropTypes.func.isRequired,
  doClear: PropTypes.func.isRequired,
};

HeadsetList.defaultProps = {
  items: [],
};

export default HeadsetList;
