import { ActionTypes } from "./ActionTypes";

const initialState = {
    errorConfig: {
        visible: false,
        title: null,
        message: null,
        icon: null,
        loader: false,
        buttonLabel: null,
    },
    loading: false,
    refresh: false,
    alert: false,
    alertMessage: null,
    toastConfig: {
        visible: true,
    },
    keyboardVisible: false,
};

export const commonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.setErrorConfig:
            return { ...state, ...{ errorConfig: action.payload } };
        case ActionTypes.setLoading:
            return { ...state, ...{ loading: action.payload } };
        case ActionTypes.setRefresh:
            return { ...state, ...{ refresh: action.payload } };
        case ActionTypes.setAlert:
            return {
                ...state,
                ...{ alert: action.alert, alertMessage: action.alertMessage },
            };
        case ActionTypes.setKeyboardVisible:
            return { ...state, ...{ keyboardVisible: action.payload } };
        case ActionTypes.setToastConfig:
            return { ...state, ...{ toastConfig: action.payload } };
    }
    return state;
};
