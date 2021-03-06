const initialState = {
  data: null,
  enableResize: true,
  isPrompt: false,
};

const SET_POPUP = 'SET_POPUP';

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPUP:
      return {
        data: action.dialog,
        enableResize: action.resize,
        isPrompt: action.isPrompt,
        title: action.title,
      };

    default:
      return state;
  }
};

const toggleDialog = (dialog, resize = true, isPrompt = false, title = '') => {
  return (dispatch) => {
    dispatch({
      type: SET_POPUP,
      dialog,
      resize,
      isPrompt,
      title,
    });
  };
};

export default dialogReducer;

export {
  toggleDialog,
};
