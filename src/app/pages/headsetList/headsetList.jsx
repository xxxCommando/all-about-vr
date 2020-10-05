import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  List, Typography, Divider, Layout, Row, Col, Card,
} from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../shape';

import HeadsetDetails from '../../components/headsetDetails';
import AutoCompleteHeadset from '../../components/autoCompleteHeadset';

import { MAX_SELECT } from '../../redux/compare/reducers/compare';

const waitData = [
  'Headset 1',
  'Headset 2',
  'Headset 3',
  'Headset 4',
  'Headset 5',
  'Headset 6',
  'Headset 7',
  'Headset 8',
  'Headset 9',
  'Headset 10',
  'Headset 11',
  'Headset 12',
];

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
      items, compareMode, compareResult, inputMapping, selectedIds, selected,
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
              <div className={compareMode ? 'compare-mode' : ''}>
                <span>V</span>
              </div>
              <div className={compareMode ? 'compare-mode' : ''}>
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
};

HeadsetList.defaultProps = {
  items: [],
};

export default HeadsetList;
