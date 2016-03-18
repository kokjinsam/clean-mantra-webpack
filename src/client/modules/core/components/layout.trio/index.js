import React from 'react';
import classNames from 'classnames';
import assign from 'lodash/assign';

import Container from '../hemingway/container';
import Group from '../hemingway/group';

import style from './style.import.css';

/**
  * @exports TrioLayout
  * @since 0.0.1
  * @hasContainer
  * @hasActions
  * @class
  * @classdesc This layout will force footer to always
  *            be at the bottom and header to always be at
  *            the top. Content will take up all the space.
  *            Scissors-like animation will be enforced on
  *            this layout. This layout also sets/clear scroll
  *            history. Do not set/clear scroll history
  *            elsewhere.
  *
  * @param {function} header - Mount appbar on this
  * @param {function} content - Mount content on this
  * @param {function} footer - Mount footer on this
  * @param {function} drawer
  * @param {function} embeddedDrawer
  * @param {boolean} hasStickyBar - put extra padding at
  *                                 the top
  */

 /**
  * Animation Explanation
  * Complete: false
  *
  * Header will slide in from the top
  * Content & Footer will slide in from the bottom
  * Therefore making it like a scissors cutting through the * page.
  */

const propTypes = {
  header: React.PropTypes.func,
  content: React.PropTypes.func,
  footer: React.PropTypes.func,
  drawer: React.PropTypes.func,
  embeddedDrawer: React.PropTypes.func,
  headerStyle: React.PropTypes.object,
  contentStyle: React.PropTypes.object,
  footerStyle: React.PropTypes.object,
};

const privatePropTypes = {
  isEmbeddedDrawerOpen: React.PropTypes.bool,
};

const defaultProps = {
  header: null,
  content: null,
  footer: null,
  drawer: null,
  embeddedDrawer: null,
};

class TrioLayout extends React.Component {
  render() {
    const {
      header,
      content,
      footer,
      drawer,
      embeddedDrawer,
      isEmbeddedDrawerOpen,
      headerStyle,
      contentStyle,
      footerStyle,
    } = this.props;

    const contentClasses = classNames({
      [style.content]: true,
      [style.extraLeftPadding]: isEmbeddedDrawerOpen,
    });

    const renderHeader = () => {
      if (header) {
        return (
          <Group
            className={style.header}
            style={headerStyle}
          >
            {header()}
          </Group>
        );
      }

      return null;
    };

    const renderDrawer = () => {
      if (drawer) {
        return (
          <Group className={style.drawer}>
            {drawer()}
          </Group>
        );
      }

      return null;
    };

    const renderContent = () => {
      if (content) {
        return (
          <Group
            className={contentClasses}
            style={contentStyle}
          >
            { embeddedDrawer ? embeddedDrawer() : null }
            {content()}
          </Group>
        );
      }

      return null;
    };

    const renderFooter = () => {
      if (footer) {
        return (
          <Group
            className={style.footer}
            style={footerStyle}
          >
            {footer()}
          </Group>
        );
      }

      return null;
    };

    return (
      <Container
        flex
        column
        className={style.layout}
      >
        {renderDrawer()}
        {renderHeader()}
        {renderContent()}
        {renderFooter()}
        {renderDrawer()}
      </Container>
    );
  }
}

TrioLayout.propTypes = {
  ...propTypes,
  ...privatePropTypes,
};

TrioLayout.defaultProps = defaultProps;

export default TrioLayout;
