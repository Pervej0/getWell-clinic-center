import React from "react";
import Slider from "react-slick";
import useBlog from "../../../../Hooks/useBlog";
import "./BannerSlider.css";
import SliderContent from "./SliderContent";

const BannerSlide = () => {
  const [blogs] = useBlog();
  const settings3 = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    autoPlatSpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="overflow-hidden banner-slider">
      <Slider {...settings3}>
        {blogs.map((item) => (
          <SliderContent key={item.id} blog={item} />
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlide;
