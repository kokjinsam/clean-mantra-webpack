import React from 'react';
import cx from 'classnames';
import Slider from '../slider';

import style from './slider-example.import.css';

const slides = new Slider();
const PhotoSlider = slides.createSlider('js-product-slider');
const SliderNextBtn = slides.createButton('next', true);
const SliderPrevBtn = slides.createButton('prev', true);

const sliderNextBtnClasses = cx({
  [style.button]: true,
  [style.buttonLeft]: true,
});

const sliderPrevBtnClasses = cx({
  [style.button]: true,
  [style.buttonRight]: true,
});

const SliderExample = () => (
  <div>
    <PhotoSlider>
      <div className={style.frame}>1</div>
      <div className={style.frame}>2</div>
      <div className={style.frame}>3</div>
    </PhotoSlider>
    <SliderPrevBtn className={sliderPrevBtnClasses}>
      {/* <i className="material-icons">chevron_left</i> */}
      Prev
    </SliderPrevBtn>
    <SliderNextBtn className={sliderNextBtnClasses}>
      {/* <i className="material-icons">chevron_right</i> */}
      Next
    </SliderNextBtn>
  </div>
);

export default SliderExample;
