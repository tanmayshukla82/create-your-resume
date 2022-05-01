import * as documentAction from "../Actions/action";
import initialState from './initialState.json';
export const documentReducer = (state=initialState.document,action)=>{
    switch(action.type)
    {
        case documentAction.SET_SKIN : return {...state,id:action.payload.id,skinCd:action.payload.skinCd};
        case documentAction.UPDATE_SKIN : return {...state, skinCd:action.payload.skinCd};
        default : return state;
    }
}