import PropTypes from 'prop-types';

const DateShape = PropTypes.shape({
  nanoseconds: PropTypes.number,
  seconds: PropTypes.number,
});

const DescriptionShape = PropTypes.shape({
  long: PropTypes.string,
  short: PropTypes.string,
});

const HeadsetShape = PropTypes.shape({
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  releasedate: DateShape,
  description: DescriptionShape,
  index: PropTypes.number,
});

export {
  HeadsetShape,
  DateShape,
};
