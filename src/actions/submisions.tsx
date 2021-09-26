import { types } from "../types/types";

export const login = (form: object) => ({
    type: types.addSubmission,
    payload: form
    
})