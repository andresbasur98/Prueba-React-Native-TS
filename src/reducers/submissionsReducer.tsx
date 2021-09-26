import { types } from "../types/types";


export interface SubmissionState {
    submissions: []
}

const initialState = {
    submissions: []
};


type  SubmissionAction = 
    | { type: typeof types.addSubmission , payload: { form: Object }}


export const submissionsReducer = ( state = initialState as SubmissionState  , action: SubmissionAction ) => {
    
    switch (action.type) {
        case types.addSubmission:
           return {
               submissions: [...state.submissions, action.payload]
           }
    
        default:
            return state;
    }

}
