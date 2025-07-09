import { type BookAction, type BookFormState, type BookFormErrors, type BooksInformation } from "./types"
import { format } from 'date-fns';

export const initialBookState:BookFormState = {
    bookObj: {
        id: undefined,
        title:'',
        author: '',
        pageCount: 0,
        content:'',
        publishDate:'',
        additionDate: format(new Date(), 'yyyy-MM-dd'),
    },
    errors: {},
}

export const bookFormDispatch = (state: BookFormState, action: BookAction) : BookFormState => {
    switch(action.type){
        case 'UPDATE':
            const newFormData: BooksInformation = {
                ...state.bookObj,
                [action.field]: action.value,
            }

            const newErrors = bookFormValidation(newFormData);

            return {
                ...state,
                bookObj: newFormData,
                errors: newErrors,
            }

        case 'ERRORS':
            return {
                ...state,
                errors: bookFormValidation(state.bookObj),
            }
        case 'RESET':
            return {
                ...initialBookState,
                errors: {},
            };
        default:
            return state;   
    }
}

export const bookFormValidation = (state: BooksInformation) : BookFormErrors => {
    let errors:BookFormErrors = {};

    if(!state.title || state.title.length === 0){
        errors.title = "Add a title";
    }
    if(!state.author || state.author.length === 0){
        errors.author = "Add an author";
    }
    if(!state.pageCount || state.pageCount <= 0){
        errors.pageCount = "Add a page count";
    }
    if(!state.content || state.content.length === 0){
        errors.content = "Add a content";
    }
    if(!state.publishDate || state.publishDate.length === 0){
        errors.publishDate = "Add a publish date";
    }

    return errors;
}