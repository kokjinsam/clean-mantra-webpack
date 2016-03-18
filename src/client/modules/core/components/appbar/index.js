import React from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';

import style from './appbar.import.css';

// core
import Wrapper from '../hemingway/wrapper';
import Container from '../hemingway/container';

/**
  * @exports Appbar
  * @hasContainer
  * @hasActions
  * @since 0.0.1
  * @class
  * @classdesc Empty
  *
  * @param {string} title - Title for the appbar
  * @param {string} className
  * @param {element} front
  * @param {element} middle
  * @param {element} back
  */

const propTypes = {
  className: React.PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Appbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noShadow: false,
    };
    this.ticking = false;
    this.lastScrollY = 0;
    this.latestScrollY = 0;

    this.onScrollHandle = this.onScrollHandle.bind(this);
    this.requestTick = this.requestTick.bind(this);
    this.toggleAppbar = this.toggleAppbar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandle);
  }

  onScrollHandle() {
    this.latestScrollY = window.pageYOffset;
    this.requestTick();
  }

  requestTick() {
    // throttle onScrollHandle without lodash
    if (!this.ticking) {
      raf(this.toggleAppbar);
      this.ticking = true;
    }
  }

  toggleAppbar() {
    const container = this.refs.container;
    const appBarContainer = ReactDOM.findDOMNode(container);

    const currentScrollPosition = this.latestScrollY;
    const lastScrollPosition = this.lastScrollY;

    const scrollDiff = lastScrollPosition - currentScrollPosition;
    const elHeight = appBarContainer.offsetHeight;
    const elStyle = window.getComputedStyle(appBarContainer);
    const elTopProp = parseInt(elStyle.getPropertyValue('top'));
    const elTop = elTopProp + scrollDiff || 0;

    if (currentScrollPosition <= 0) {
      // scrolled to the very top
      // element sticks to the top

      appBarContainer.style.top = '0px';
    } else if (scrollDiff > 0) {
      // thumb scrolled down
      // show appbar
      const elLocation = elTop > 0 ? 0 : elTop;
      appBarContainer.style.top = `${elLocation}px`;
    } else if (scrollDiff < 0) {
      // thumb scrolled up
      // hide appbar

      const elLocation = Math.abs(elTop) > elHeight ? -elHeight : elTop;
      appBarContainer.style.top = `${elLocation}px`;
    }

    this.lastScrollY = window.scrollY;
    this.ticking = false;
  }

  render() {
    const {
      className,
    } = this.props;

    return (
      <Wrapper className={style.wrapper}>
        <Container
          ref="container"
          className={`${style.container} ${className}`}
        >
          Appbar
        </Container>
      </Wrapper>
    );
  }
}

const mergedPropTypes = {
  ...propTypes,
};

const mergedDefaultProps = {
  ...defaultProps,
};

Appbar.propTypes = mergedPropTypes;
Appbar.defaultProps = mergedDefaultProps;

export default Appbar;
