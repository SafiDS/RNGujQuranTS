import { removeUserSession, setUserSession } from "../../utils/LocalStorage";
import { ActionTypes } from "./ActionTypes";

const initialState = {
  session: null,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.setLogout: {
      removeUserSession();
      return { ...{ session: null } };
    }
    case ActionTypes.setSession:
      setUserSession(action.payload);
      return { ...state, ...{ session: action.payload } };
  }
  return state;
};
