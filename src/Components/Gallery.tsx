import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

interface GalleryProps {
  title: string;
  dark: boolean;
  id: string;
}

interface GalleryState {

}

export default class Gallery extends Component<GalleryProps, GalleryState> {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{ color: 'white' }}>{this.props.title}</h1>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
            totalSlides={2}
            disableKeyboard={false}
            touchEnabled
            dragEnabled>
            <Slider>
              <Slide index={0}><iframe title="Slide" width="560" height="315" src="https://www.youtube.com/embed/BryL-5A6ZEQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></Slide>
              <Slide index={1}><iframe title="SecSlide" width="560" height="315" src="https://www.youtube.com/embed/49lh6yPoH_Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></Slide>
            </Slider>
            <DotGroup className='dot-group' />
          </CarouselProvider>
        </div>
      </div>
    );
  }
}
