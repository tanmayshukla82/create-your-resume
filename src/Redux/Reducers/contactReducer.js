import * as contactAction from '../Actions/action'
import initialState from './initialState.json' 

export const contactReducer = (state=initialState.contact,action)=>{
    switch(action.type)
    {
        case contactAction.SET_CONTACT : return {...action.payload};
        case contactAction.UPDATE_CONTACT : return {...action.payload};
        default : return state
    }
}