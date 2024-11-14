import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // If using React
const ImageSlide = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};
const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    height: 100%;
    width: 5vw;
    opacity: 0;
    z-index: 1;
    &:hover {
      transition: opacity 0.2s ease 0s;
      opacity: 1;
    }
  }
  ul li button {
    &:befoe {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: #f9f9f9;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -125px;
  }
  .slick-next {
    right: -125px;
  }
`;
const Wrap = styled.div`
  border: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid white;
      transition-durations: ease-out 300ms;
    }
  }
`;

export default ImageSlide;
