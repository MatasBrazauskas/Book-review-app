import React, { useCallback, useReducer } from 'react';
import axios from 'axios';

import { REVIEW_URL } from '../Utils/constant';
import { type ReviewInfomation } from '../Utils/types';
import { initialFormState, reviewFormDispath, reviewFormValidation } from '../Utils/reviewFormValidation';

interface AppReviewProps {
    id: number
    setAddBook: React.Dispatch<React.SetStateAction<boolean>>
    setReviews: React.Dispatch<React.SetStateAction<ReviewInfomation[]>>
}

export function AppReview({id, setAddBook, setReviews} : AppReviewProps) {

    const [review, reviewDispatch] = useReducer(reviewFormDispath, initialFormState);
    const { reviewObj, errors } = review;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const currError = reviewFormValidation(reviewObj);
        const isFormValid = Object.values(currError).every(error => !error);
        reviewDispatch({ type: 'ERRORS', errors: currError });

        if(isFormValid === false){
            alert('Please correct the form errors before submitting.');
            return;
        }
        
        const reviewDTO = {
            ...review.reviewObj,
            bookId: id,
        }

        axios.post(REVIEW_URL, reviewDTO).then(_ => {
            setReviews(arr => [...arr, reviewDTO]);
        });
        setAddBook(false);
        reviewDispatch({type : 'RESET'});
    };

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;   
        reviewDispatch({ type: 'UPDATE', field: name as keyof FormData, value: value});
    },[]);

    const insertReviewerNameStr = () => {return reviewObj.reviewerName === '' ? 'Reviewer Name' : reviewObj.reviewerName}
    const insertContentStr = () => {return reviewObj.content === '' ? 'Content' : reviewObj.content}
    const insertRating = () => {return reviewObj.rating === 0 ? 'Rating' : String(reviewObj.rating)}

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' value={reviewObj.reviewerName} placeholder={insertReviewerNameStr()} name='reviewerName' onChange={(e) => handleChange(e)}/>
            {errors.reviewerName && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.reviewerName}</p>}
            <input type='text' value={reviewObj.content} placeholder={insertContentStr()} name='content' onChange={(e) => handleChange(e)}/>
            {errors.content && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.content}</p>}
            <label htmlFor="points">{reviewObj.rating}</label>
            <input type='range' id='points' min='0' max='10' value={reviewObj.rating} placeholder={insertRating()} name='rating' onChange = {(e) => handleChange(e)}/>
            {errors.rating && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.rating}</p>}
            <button type='submit'>Sumbit Form</button>
        </form>
    );
};

export default AppReview;