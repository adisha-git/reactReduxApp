import { SAVE_PERSONAL_INFO, CLEAR_PERSONAL_INFO } from "../actionTypes";

export default function(state={}, action){
    switch(action.type){
        case SAVE_PERSONAL_INFO:
            return {
                ...state,
                ...action.payload
            };
        case CLEAR_PERSONAL_INFO:
                return {
                    ...state,
                    personalInfo: {}
                };    
        default:
            return state;
    }
}