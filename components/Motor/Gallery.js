import { useRef, useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import SlickNavigationButton from "../Carousel/SlickNavigationButton";
import StrapiImage from "../StrapiImage";

function Gallery({ images }) {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const mainGallery = useRef();
  const galleryNavigation = useRef();

  useEffect(() => {
    setState({
      nav1: mainGallery.current,
      nav2: galleryNavigation.current,
    });
  }, []);

  const { nav1, nav2 } = state;

  const carouselSettings = {
    dots: false,
    infinite: false,
    swipeToSlide: false,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNavigationButton variant="next" />,
    prevArrow: <SlickNavigationButton variant="prev" />,
    focusOnSelect: true,
  };

  const navigationSettings = {
    dots: false,
    infinite: false,
    swipeToSlide: false,
    lazyLoad: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    centerMode: false,
  };

  return (
    <div className="relative">
      <Slider {...carouselSettings} ref={mainGallery} asNavFor={nav2}>
        {images.map((image) => (
          <div key={image.id}>
            <div className="w-full relative bg-grey-900 h-64 md:h-gallery">
              <StrapiImage src={image} layout="fill" objectFit="contain" />
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute right-0 left-0 bottom-0 px-4 py-2 bg-gradient-to-t from-black hidden md:block">
        <Slider {...navigationSettings} ref={galleryNavigation} asNavFor={nav1}>
          {images.map((image) => (
            <div className="pr-2 outline-none cursor-pointer" key={image.id}>
              <div className="w-auto relative h-12 navigation rounded-sm">
                <Image
                  src={image.formats.thumbnail.url}
                  objectFit="cover"
                  layout="fill"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
};

export default memo(Gallery);
