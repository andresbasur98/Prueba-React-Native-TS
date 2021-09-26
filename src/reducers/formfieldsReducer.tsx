import { types } from "../types/types";


export interface formfieldsState {
    fields: []
}

const initialState = {
    fields: []
};


type  formfieldsAction = 
    | { type: typeof types.formFields , payload: { form: [] }}


export const formfieldsReducer = ( state = initialState as formfieldsState  , action: formfieldsAction ) => {
    
    switch (action.type) {
        case types.formFields:
            console.log(action.payload)
           return {
               formfields: action.payload
           }
    
        default:
            return state;
    }

}
