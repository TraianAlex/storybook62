import styled from 'styled-components';
import Slider from 'react-slick';
import { images } from './data';
import './styles.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  className: 'slides',
};

export const CarouselLibrary = () => {
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <SliderStyled key={image.id}>
            <img className="sliderImg" src={image.url} alt={image.alt} />
            <p className="imgTitle">{image.name}</p>
          </SliderStyled>
        );
      })}
    </Slider>
  );
};

const SliderStyled = styled.div`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');

  display: flex !important;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;

  .sliderImg {
    box-sizing: border-box;
    height: 300px;
    width: 400px;
    padding: 0px 2vw;
    object-fit: cover;
  }

  .imgTitle {
    font-weight: 900;
  }
`;
