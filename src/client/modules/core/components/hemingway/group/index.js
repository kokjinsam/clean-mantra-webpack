import React from 'react';
import classNames from 'classnames';
import PropsValidate from '../../../libs/props-validate';

import style from '../style.import.css';

const supportedTags = [
  'span',
  'div',
];

const propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  clean: React.PropTypes.bool,
  flex: PropsValidate.display,
  column: PropsValidate.direction,
  row: PropsValidate.direction,
  verticalCenter: React.PropTypes.bool,
  horizontalCenter: React.PropTypes.bool,
  className: React.PropTypes.string,
  type: PropsValidate.type(supportedTags),
};

const defaultProps = {
  clean: false,
  flex: false,
  column: false,
  row: false,
  verticalCenter: false,
  horizontalCenter: false,
  className: '',
  type: 'div',
};

class Group extends React.Component {
  render() {
    const {
      children,
      clean,
      flex,
      column,
      row,
      verticalCenter,
      horizontalCenter,
      className,
      type,
      ...others,
    } = this.props;

    // verticalCenter and horizontalCenter class will
    // only exist if row or column is specified.
    const defaultClasses = classNames({
      [style.group]: true,
      [style.clean]: clean && (type !== 'ul' && type !== 'ol'),
      [style.flex]: flex,
      [style.column]: column,
      [style.row]: row,
      [style.verticalCenter]: verticalCenter,
      [style.horizontalCenter]: horizontalCenter,
      [style.cleanList]: clean && (type === 'ul' || type === 'ol'),
    });

    const mergedClasses = `${defaultClasses} ${className}`;
    const props = Object.assign({
      className: className ? mergedClasses : defaultClasses,
    }, others);

    let elemType = type;
    const isSupported = supportedTags.filter((tag) => tag === type);
    if (!isSupported.length) {
      elemType = 'div';
    }

    return React.createElement(elemType, props, children);
  }
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;

export default Group;
