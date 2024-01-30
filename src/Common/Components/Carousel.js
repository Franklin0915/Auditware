import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.img`
  width: 100%;
  object-fit: cover;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
`;

const ManualNavButton = styled(NavButton)`
  font-size: 100px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 2rem 0 0 6rem;
`;

const Line = styled.span`
  width: 60px;
  height: 2px;
  background-color: white;
  display: block;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-even;
  width: 110px;
`;

const PrevButton = styled(ManualNavButton)`
  left: 200px;
`;

const MiddleNavButton = styled(ManualNavButton)`
  left: calc(50% - 30px);
`;

const NextButton = styled(ManualNavButton)`
  right: 15px;
`;

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  return (
    <CarouselContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlideWrapper>
      <NavContainer>
        <PrevButton onClick={prevSlide}>
          <Line />
        </PrevButton>
        <MiddleNavButton onClick={() => setCurrentSlide(1)}>
          <Line />
        </MiddleNavButton>
        <NextButton onClick={nextSlide}>
          <Line />
        </NextButton>
      </NavContainer>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
