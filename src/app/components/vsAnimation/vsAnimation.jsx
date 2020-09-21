/* eslint-disable max-classes-per-file */
import React from 'react';

class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { contextRef } = this.props;
    return (
      <canvas
        width="300"
        height="300"
        ref={(node) => (node ? contextRef(node.getContext('2d')) : null)}
      />
    );
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
  }

  componentDidUpdate() {
    const { angle } = this.props;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.translate(this.width / 2, this.height / 2);
    this.ctx.rotate((angle * Math.PI) / 180);
    this.ctx.fillStyle = '#4397AC';
    this.ctx.fillRect(-this.width / 4, -this.height / 4, this.width / 2, this.height / 2);
    this.ctx.restore();
  }

  saveContext(ctx) {
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
  }

  render() {
    return <PureCanvas contextRef={this.saveContext} />;
  }
}

class VsAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    this.setState((prevState) => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    const { angle } = this.state;
    return <Canvas angle={angle} />;
  }
}

export default VsAnimation;
