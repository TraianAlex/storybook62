import styled from 'styled-components';

export const SlideImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .rightArrow {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 2rem;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 2rem;
  }
`;
