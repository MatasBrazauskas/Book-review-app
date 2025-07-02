import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { type BookArraySetterAndGetter } from '../ContentBar/ContentBar';
import axios from 'axios';

export const BOOK_URL = import.meta.env.VITE_BOOK_URL;

export const SearchBar:React.FC<BookArraySetterAndGetter> = ({bookArray, setBookArray}: BookArraySetterAndGetter) => {

    const delay = 500;
    const [input, setInput] = useState('');
    const debounceSearchTerm = useDebounce(input, delay);

    useEffect(() => {
        if(debounceSearchTerm)
        {
            const URL = BOOK_URL + `/get-books?book_title=${input}`;
            axios.get(URL).
            then(response => {
                setBookArray(response.data);
            });
        }
    }, [debounceSearchTerm]);

    useEffect(() => {
        const URL = BOOK_URL + "/get-books?book_title=";
        axios.get(URL).
        then(res => {
            setBookArray(res.data)
        });
    },[])

    const insertPlaceholderStr = () => {return input === '' ? 'Enter a books title' : input}

    return (
        <div>
            <form>
                <input type="text" placeholder={insertPlaceholderStr()} onChange={(e) => setInput(e.target.value)}/>
            </form>
        </div>
    );
}