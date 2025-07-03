import React, { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
//import { type BookArraySetterAndGetter } from '../ContentBar/ContentBar';
import { useDispatch } from 'react-redux';
import { fetchBooks, type AppDispatch } from '../State/store';
//import { type RootState } from '@reduxjs/toolkit/query';
//import { type BooksState, type BookDTO } from '../State/store';

export const SearchBar:React.FC = () => {

    const delay = 500;
    const dispatch: AppDispatch = useDispatch();

    const [input, setInput] = useState('');
    const debounceSearchTerm = useDebounce(input, delay);

    useEffect(() => {
        dispatch(fetchBooks(input));
    }, [debounceSearchTerm]);

    useEffect(() => {
        dispatch(fetchBooks(''));
    },[]);

    const insertPlaceholderStr = () => {return input === '' ? 'Enter a books title' : input}

    return (
        <div>
            <form>
                <input type="text" placeholder={insertPlaceholderStr()} onChange={(e) => setInput(e.target.value)}/>
            </form>
        </div>
    );
}