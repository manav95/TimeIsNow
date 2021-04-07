import React from 'react';
import { Icon } from 'semantic-ui-react'
import { WithStore } from 'pure-react-carousel';

export class CarouselArrow extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(ev) {
        const {
          carouselStore, currentSlide, onClick, step, infinite, visibleSlides, totalSlides,
        } = this.props;
    
        const maxSlide = totalSlides - visibleSlides;
        
        if (this.props.className === 'arrow right') {
           step *= -1
        }

        let newCurrentSlide = Math.max(
          currentSlide - step,
          0,
        );
    
        if (infinite) {
          const isOnFirstSlide = currentSlide === 0;
          newCurrentSlide = isOnFirstSlide ? maxSlide : newCurrentSlide;
        }
    
        carouselStore.setStoreState(
          {
            currentSlide: newCurrentSlide,
            isPlaying: false,
          },
          onClick !== null && onClick.call(this, ev),
        );
    }
    render() {
        const {
          carouselStore,
          className,
          currentSlide,
          disabled,
          onClick,
          step,
          totalSlides,
          visibleSlides,
          infinite,
          ...props
        } = this.props;
    
    
        return (
          <Icon
            type={this.props.className}
            aria-label={this.props.label}
            className={this.props.className}
            onClick={this.handleOnClick}
            {...props}
          >
            {this.props.children}
          </Icon>
        );
      }
}

export default WithStore(CarouselArrow, state => ({
    // these are read only properties.  we use the "deepFreeze"
    // npm package to make these properties immutable. You don't have to use
    // all of these, just pick the ones you need.
    currentSlide: state.currentSlide,
    disableAnimation: state.disableAnimation,
    hasMasterSpinner: state.hasMasterSpinner,
    imageErrorCount: state.imageErrorCount,
    imageSuccessCount: state.imageSuccessCount,
    lockOnWindowScroll: state.lockOnWindowScroll,
    masterSpinnerThreshold: state.masterSpinnerThreshold,
    naturalSlideHeight: state.naturalSlideHeight,
    naturalSlideWidth: state.naturalSlideWidth,
    orientation: state.orientation,
    slideSize: state.slideSize,
    slideTraySize: state.slideTraySize,
    step: state.step,
    dragStep: state.dragStep,
    totalSlides: state.totalSlides,
    touchEnabled: state.touchEnabled,
    dragEnabled: state.dragEnabled,
    visibleSlides: state.visibleSlides,
}));