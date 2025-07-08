import React, { useReducer } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import axios from 'axios';
import { BOOK_URL } from '../Utils/constant';

import { initialBookState, bookFormDispatch, bookFormValidation }   from '../Utils/bookFormValidation';

export const AddBookPage:React.FC = () => {

    /*const initialFormsObj = {
        title: '',
        author: '',
        pageCount: 0,
        content: '',
        publishDate: '',
    }

    const [formsObj, setFormsObj] = useReducer((curr, newVal) => ({...curr, ...newVal}), initialFormsObj);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const dataToSend = {
            ...formsObj,
            additionDate: format(new Date(), 'yyyy-MM-dd'),
        }
        console.log(dataToSend);
        axios.post(BOOK_URL, dataToSend).then(response => console.log(`Obj sent to backend ${response}`));
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormsObj({ [name] : value} );
    }

    const handleDate = (date: Date | null) => {
        if(date instanceof Date){
            setFormsObj({ ['publishDate'] : format(date, 'yyyy-MM-dd')});
        }else{
            setFormsObj({ ['publishDate'] : ''});
        }
    }*/

    const insertTitleStr = () => {return initialFormsObj.title === '' ? 'Books title' : initialFormsObj.title}
    const insertAuthorStr = () => {return initialFormsObj.author === '' ? 'Authors name' : initialFormsObj.author}
    const insertPageCount = () => {return initialFormsObj.pageCount === 0 ? 'Page count' : String(initialFormsObj.pageCount)}
    const insertContentStr = () => {return initialFormsObj.content === '' ? 'Books content' : initialFormsObj.content}

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder={insertTitleStr()} name='title' value={formsObj.title} onChange={(e) => handleFormChange(e)}/>
        <input type="text" placeholder={insertAuthorStr()} name='author' value={formsObj.author} onChange={(e) => handleFormChange(e)}/>
        <input type="text" placeholder={insertPageCount()} name='pageCount' value={formsObj.pageCount} onChange={(e) => handleFormChange(e)}/>
        <input type="text" placeholder={insertContentStr()} name='content' value={formsObj.content} onChange={(e) => handleFormChange(e)}></input>
        <Calendar onChange={() => handleDate} value={initialFormsObj.publishDate}/>
        <button type="submit">Sumbit Info</button>
    </form>
    );
};