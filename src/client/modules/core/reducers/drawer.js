const defaultState = {
  DRAWER_IS_OPEN: false,
  EMBEDDED_DRAWER_IS_OPEN: false
};

const drawerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        ...state,
        DRAWER_IS_OPEN: true
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        DRAWER_IS_OPEN: false
      };
    case 'OPEN_EMBEDDED_DRAWER':
      return {
        ...state,
        EMBEDDED_DRAWER_IS_OPEN: true
      };
    case 'CLOSE_EMBEDDED_DRAWER':
      return {
        ...state,
        EMBEDDED_DRAWER_IS_OPEN: false
      };
    default:
      return state;
  }
};

export default drawerReducer;
