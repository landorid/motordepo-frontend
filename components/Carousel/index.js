import PropTypes from "prop-types";
import Slider from "react-slick";
import merge from "lodash/merge";
import "slick-carousel/slick/slick.css"; //slick global style

function Carousel({ children, settings }) {
  const defaultSettings = {
    dots: false,
    infinite: false,
    swipeToSlide: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: true,
  };

  const mergedSettings = merge({}, defaultSettings, settings);

  return <Slider {...mergedSettings}>{children}</Slider>;
}

Carousel.propTypes = {
  settings: PropTypes.object,
};

export default Carousel;
