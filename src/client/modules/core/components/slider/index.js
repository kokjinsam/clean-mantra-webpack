import React from 'react';
import assign from 'lodash/assign';
import Component from '../hemingway/component';

import style from './slider.import.css';

/**
 * This file export a Slider class
 */

class Slider {
  createSlider(slidesId) {
    const self = this;

    this.slidesId = slidesId;

    const SlidesHolder = class extends React.Component {
      componentDidMount() {
        const Swipe = require('swipejs');
        const slidesHolder = new Swipe(document.getElementById(self.slidesId));
        self.slider = slidesHolder;
      }

      render() {
        const {
          children,
          className = '',
          ...others,
        } = this.props;

        return (
          <Component
            id={self.slidesId}
            className={`${style.wrapper} ${className}`}
            {...others}
          >
            <div className={`slider ${style.slider}`}>
              {children}
            </div>
          </Component>
        );
      }
    };

    return SlidesHolder;
  }

  createButton(type, waves) {
    if (type !== 'next' && type !== 'prev') {
      throw new Error('Invalid type');
    }

    const self = this;
    const SliderButton = class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickBtn = this.onClickBtn.bind(this);
      }

      componentDidMount() {
        if (waves) {
          // Waves.attach(this.refs.button);
        }
      }

      onClickBtn() {
        if (type === 'next') {
          self.slider.next();
          return;
        } else if (type === 'prev') {
          self.slider.prev();
          return;
        }
      }

      render() {
        const {
          ref,
          children,
          ...others
        } = this.props;

        const elemType = 'button';
        const props = assign({
          ref: 'button',
          onClick: this.onClickBtn,
        }, others);

        return React.createElement(elemType, props, children);
      }
    };

    return SliderButton;
  }
}

export default Slider;
