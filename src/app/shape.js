import PropTypes from 'prop-types';

const DateShape = PropTypes.shape({
  nanoseconds: PropTypes.number,
  seconds: PropTypes.number,
});

const RequirementsShape = PropTypes.shape({
  os: PropTypes.arrayOf(PropTypes.string),
  cpu: PropTypes.string,
  gpu: PropTypes.string,
  ram: PropTypes.number,
  usb: PropTypes.string,
  video: PropTypes.string,
});

const ResolutionShape = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

const PushedContentsShape = PropTypes.shape({
  text: PropTypes.string,
  img: PropTypes.string,
  right: PropTypes.bool,
});

const HeadsetShape = PropTypes.shape({
  audio: PropTypes.bool,
  brand: PropTypes.string,
  description: PropTypes.string,
  flipup: PropTypes.bool,
  fov: PropTypes.number,
  img: PropTypes.string,
  imgs: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  ipd: PropTypes.bool,
  mic: PropTypes.bool,
  name: PropTypes.string,
  pixeldensity: PropTypes.number,
  price: PropTypes.number,
  refreshrate: PropTypes.number,
  releasedate: DateShape,
  requirements: RequirementsShape,
  resolution: ResolutionShape,
  screentype: PropTypes.string,
  status: PropTypes.number,
  summary: PropTypes.string,
  think: PropTypes.string,
  tracking: PropTypes.string,
  weight: PropTypes.number,
  wireless: PropTypes.bool,
  pushedContents: PropTypes.arrayOf(PushedContentsShape),
});

export {
  HeadsetShape,
  DateShape,
};
