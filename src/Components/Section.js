import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Section({ title, subtitle, dark, id, slides }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 style={{color: 'white' }}>{title}</h1>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      ></CarouselProvider>
      <Slider>
         slides
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <p>{subtitle}</p>

      </div>
    </div>
  );
}
