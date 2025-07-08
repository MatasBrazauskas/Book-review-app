import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_URL } from '../Utils/constant';
import AppReview from '../Components/AppReview';
import axios from 'axios';

import { type BooksInformation, type ReviewInfomation } from '../Utils/types';
import { REVIEW_URL } from '../Utils/constant';

export const BookPage:React.FC = () => {

    const { book_title } = useParams<{book_title: string}>();
    const [booksInfo, setBooksInfo] = useState<BooksInformation>({title: '', author: '', pageCount: 0, content: '', publishDate: '', additionDate: '', id: 0});
    const [reviews, setReviews] = useState<ReviewInfomation[]>([]);
    const [addBook, setAddBook] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const GET_SINGLE_BOOK_URL = BOOK_URL + `/get-books/${book_title}`;
            const res = await axios.get<BooksInformation>(GET_SINGLE_BOOK_URL);
            setBooksInfo(res.data);

            const GET_REVIEWS_URL = REVIEW_URL + `/${res.data.id}`;
            const temp = await axios.get<ReviewInfomation[]>(GET_REVIEWS_URL);
            setReviews(temp.data);
        }
        getData();
    },[]);

    return (
        <div>
            <div>Title - {booksInfo.title}</div>
            <div>Author - {booksInfo.author}</div>
            <div>Page Count - {booksInfo.pageCount}</div>
            <div>Content - {booksInfo.content}</div>
            <div>Publish Date - {booksInfo.publishDate}</div>
            <div>Addition Date - {booksInfo.additionDate}</div>

            <br></br>
            <div>Reviews:</div>

            {reviews.map((review, i) => {
                return (
                    <div key={i}>
                        <div>Reviewer name - {review.reviewerName}</div>
                        <div>Content - {review.content}</div>
                        <div>Rating - {review.rating}</div>
                        <br></br>
                    </div>
                );
            })}

            {addBook ? 
            <div>
                <AppReview id={booksInfo.id ?? -1} setAddBook={setAddBook} setReviews={setReviews}/>
            </div> : 
            <div>
                <button type='button' onClick={() => setAddBook(true)}>Add A Review</button>
            </div>}
        </div>
    )
};