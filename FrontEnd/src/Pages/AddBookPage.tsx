import React, { useReducer, useCallback } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import axios from 'axios';
import { BOOK_URL } from '../Utils/constant';

import { initialBookState, bookFormDispatch, bookFormValidation }   from '../Utils/bookFormValidation';

export const AddBookPage:React.FC = () => {

    const [book, bookDispatch] = useReducer(bookFormDispatch, initialBookState);
    const {bookObj, errors} = book; 

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const currError = bookFormValidation(bookObj);
        const isFormValid = Object.values(currError).every(error => !error);
        console.log(isFormValid);
        bookDispatch({type:'ERRORS', errors: currError});

        if(!isFormValid){
            alert("Validate the form");
            return;   
        }

        axios.post(BOOK_URL, bookObj);
        bookDispatch({type:'RESET'});
    }

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;   
        bookDispatch({ type: 'UPDATE', field: name as keyof FormData, value: value});
    },[]);

    const handleDate = (date: Date | null) => {
        if(date === null){
            return;
        }
        const final = format(date, 'yyyy-MM-dd');
        console.log('There - ' + final);
        bookDispatch({type:'UPDATE', field: 'publishDate' as keyof FormData , value: final});
    };

    const insertTitleStr = () => {return bookObj.title === '' ? 'Books title' : bookObj.title}
    const insertAuthorStr = () => {return bookObj.author === '' ? 'Authors name' : bookObj.author}
    const insertPageCount = () => {return bookObj.pageCount === 0 ? 'Page count' : String(bookObj.pageCount)}
    const insertContentStr = () => {return bookObj.content === '' ? 'Books content' : bookObj.content}

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder={insertTitleStr()} name='title' value={bookObj.title} onChange={(e) => handleChange(e)}/>
        {errors.title && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.title}</p>}
        <input type="text" placeholder={insertAuthorStr()} name='author' value={bookObj.author} onChange={(e) => handleChange(e)}/>
        {errors.author && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.author}</p>}
        <input type="text" placeholder={insertPageCount()} name='pageCount' value={bookObj.pageCount} onChange={(e) => handleChange(e)}/>
        {errors.pageCount && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.pageCount}</p>}
        <input type="text" placeholder={insertContentStr()} name='content' value={bookObj.content} onChange={(e) => handleChange(e)}></input>
        {errors.content && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.content}</p>}
        <Calendar onChange={handleDate} value={bookObj.publishDate}/>
        {errors.publishDate && <p style={{ color: 'red', fontSize: '0.8em', margin: '5px 0 0 0' }}>{errors.publishDate}</p>}
        <button type="submit">Sumbit Info</button>
    </form>
    );
};