import { type ReviewAction, type ReviewFormState, type ReviewFormError, type ReviewInfomation } from "./types"

export const initialFormState: ReviewFormState = {
    reviewObj: {
        bookId: 0,
        reviewerName: '',
        content: '',
        rating: 0,
    },
    errors: {},
};

export const reviewFormDispath = (state: ReviewFormState, action: ReviewAction) : ReviewFormState => {
    switch(action.type){
        case 'UPDATE':
            const newFormData:ReviewInfomation = {
                ...state.reviewObj,
                [action.field] : action.value,
            }

            const newErrors = reviewFormValidation(newFormData);

            return {
                ...state,
                reviewObj: newFormData,
                errors: newErrors,
            }
        case 'ERRORS':
            return {
                ...state,
                errors: action.errors,
            };
        case 'RESET':
            return {
                ...initialFormState,
                errors:{},
            }
        default:
            return state;
    };
};

export const reviewFormValidation = (data : ReviewInfomation): ReviewFormError => {
    let errors: ReviewFormError = {};

    if(!data.reviewerName || data.reviewerName.length === 1){
        errors.reviewerName = "No reviewer name provided";
    }

    if(!data.content || data.content.length === 0){
        errors.content = "Enter a content for a book";
    }

    if(!data.rating || data.rating === 0){
        errors.rating = "Enter rating bigger than 0";
    }

    return errors;
};