import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import axios from 'axios';
import { BOOK_URL } from './SearchBar/SearchBar';

export const AddBookPage:React.FC = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [content, setContent] = useState('');
    const [publichDate, setPublishDate] = useState<string | null>('');

    const insertTitleStr = () => {return title === '' ? 'Books title' : title}
    const insertAuthorStr = () => {return author === '' ? 'Authors name' : author}
    const insertPageCount = () => {return pageCount === 0 ? 'Page count' : String(pageCount)}
    const insertContentStr = () => {return content === '' ? 'Books content' : content}

    const handleChange = (value : any) => {
        if(value instanceof Date)
        {
            setPublishDate(format(value, 'yyyy-MM-dd'));
        }else{
            setPublishDate(null);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const bookObj = {
            title: title,
            author: author,
            pageCount: pageCount,
            content: content,
            publishDate: publichDate,
            additionDate: format(new Date(), 'yyyy-MM-dd')
        }
        console.log(bookObj);
        axios.post(BOOK_URL, bookObj).then(response => console.log(`Obj sent to backend ${response}`));
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder={insertTitleStr()} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder={insertAuthorStr()} onChange={(e) => setAuthor(e.target.value)}/>
                <input type="text" placeholder={insertPageCount()} onChange={(e) => setPageCount(parseInt(e.target.value))}/>
                <input type="text" placeholder={insertContentStr()} onChange={(e) => setContent(e.target.value)}></input>
                <Calendar onChange={(value) => handleChange(value)} value={publichDate}/>
                <button type="submit">Sumbit Info</button>
            </form>
        </div>
    )
};