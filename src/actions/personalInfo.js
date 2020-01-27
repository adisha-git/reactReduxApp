import { SAVE_PERSONAL_INFO, CLEAR_PERSONAL_INFO } from "../actionTypes";

export const savePersonalInfo = (personalInfo) => async dispatch => {
    console.log("action called", personalInfo);
    dispatch({ type: SAVE_PERSONAL_INFO, payload: personalInfo });
};

export const clearPersonalInfo = () => async dispatch => {
    dispatch({ type: CLEAR_PERSONAL_INFO });
};