import styled from 'styled-components';
import Slider from 'react-slick';
import './styles.css';

const images = [
  {
    id: '1',
    name: 'Kitty 1',
    alt: '',
    url: 'images/carousel-images/carousel-custom-xcvbnm-usplash.jpg',
  },
  {
    id: '2',
    name: 'Kitty 2',
    alt: '',
    url: 'images/carousel-images/peter-herrmann-aT88kga0g_M-unsplash.jpg',
  },
  {
    id: '3',
    name: 'Kitty 3',
    alt: '',
    url: 'images/carousel-images/surface-sAsAxFPXwEg-unsplash.jpg',
  },
  {
    id: '4',
    name: 'Kitty 4',
    alt: '',
    url: 'images/carousel-images/xps-8pb7Hq539Zw-unsplash.jpg',
  },
];

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
