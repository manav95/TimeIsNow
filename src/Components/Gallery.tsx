import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

export default function Gallery({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1 style={{color: 'white' }}>{title}</h1>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={2}
          disableKeyboard={false}
          touchEnabled
          dragEnabled>
         <Slider>
         <Slide index={0}><iframe width="560" height="315" src="https://www.youtube.com/embed/BryL-5A6ZEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Slide>
         <Slide index={1}><iframe width="560" height="315" src="https://www.youtube.com/embed/49lh6yPoH_Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Slide>
      </Slider>
      <DotGroup className='dot-group'/>
      </CarouselProvider>
      </div>
    </div>
  );
}
