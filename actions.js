// actions.js

// Action types
export const UPDATE_USER_INFORMATION = 'UPDATE_USER_INFORMATION';
export const updateUserInformation = userInfo => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_USER_INFORMATION,
        payload: userInfo,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };
};
