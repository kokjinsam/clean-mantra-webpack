function createChainableTypeChecker(validate) {
  function checkType(
    isRequired,
    props,
    propName,
    componentName
  ) {
    if (props[propName] === null || props[propName] === false) {
      if (isRequired) {
        return new Error(
          `Required \`${propName}\` was not specified in ` +
          `\`${componentName}\`.`
        );
      }
      return null;
    }

    return validate(props, propName, componentName);
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}


// ----- Rules
function createDisplayTypeChecker() {
  function validate(props, propName, componentName) {
    if (props.flex && props.clean) {
      if (props.type === 'ul' || props.type === 'ol') {
        return null;
      }

      return new Error(`[ ${componentName} ] Only flex or clean allowed.`
        + `Unless type is 'ul' or 'ol'.`);
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}

function createDirectionTypeChecker() {
  function validate(props, propName, componentName) {
    if (props.row && props.column) {
      return new Error(`[ ${componentName} ] Only row or column allowed.`);
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}

function createTypeTypeChecker(supportedTags) {
  function validate(props, propName, componentName) {
    const isSupported = supportedTags.filter((tag) => tag === props[propName]);

    if (isSupported.length === 1) {
      return null;
    }

    return new Error(`[ ${componentName} ] ${props[propName]} is not supported`);
  }

  return createChainableTypeChecker(validate);
}

// TODO: complete this shit. I'm done for now.
function createChildrenTypeChecker(allowedChildrenType) {
  const supportedTags = [
    'Component',
    'Container',
    'Group',
    'Wrapper'
  ];

  function validate(props, propName, componentName) {
    if (allowedChildrenType === 'all') {
      return null
    }

    if (allowedChildrenType === 'none') {
      return null
    }

    if (allowedChildrenType instanceof Array) {
      allowedChildrenType.forEach((allowedChildType) => {
        [].forEach.call(props.children, (child) => {
          console.log(child);
          console.log(child.type);
          if (child.type.name) {
            console.log(child.type.name);
          } else {
            console.log(child.type);
          }
          console.log('');
        });
      });
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}
// ----- Exports

const PropsValidate = {
  display: createDisplayTypeChecker(),
  direction: createDirectionTypeChecker(),
  type: createTypeTypeChecker,
  allowChildren: createChildrenTypeChecker
};

export default PropsValidate;
