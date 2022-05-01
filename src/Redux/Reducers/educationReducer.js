import * as educationAction from "../Actions/action";
import initialState from './initialState.json'
export const educationReducer = (state=initialState.education,action)=>{
    switch(action.type){
        case educationAction.SET_EDUCATION : return {...action.payload};
        case educationAction.UPDATE_CONTACT : return {...action.payload};
        default : return state;
    }
}
