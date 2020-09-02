import PropTypes from 'prop-types';

const DateShape = PropTypes.shape({
  nanoseconds: PropTypes.number,
  seconds: PropTypes.number,
});

const HeadsetShape = PropTypes.shape({
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  releasedate: DateShape,
  description: PropTypes.string,
  summary: PropTypes.string,
  index: PropTypes.number,
});

export {
  HeadsetShape,
  DateShape,
};
