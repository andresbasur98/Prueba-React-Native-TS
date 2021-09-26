import { types } from "../types/types";

export const insertFormFields = (form: object) => ({
    type: types.formFields,
    payload: Object.keys(form)
    
})