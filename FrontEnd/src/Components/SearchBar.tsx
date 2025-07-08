import React, { useState, useEffect } from 'react';
import useDebounce from '../Hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../Store';
import { DEBOUNCE_DELAY } from '../Utils/constant';

import { type AppDispatch } from '../Utils/types';

export const SearchBar:React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const [input, setInput] = useState('');
    const debounceSearchTerm = useDebounce<String>(input, DEBOUNCE_DELAY);

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
                <input 
                    type="text" 
                    placeholder={insertPlaceholderStr()} 
                    onChange={(e) => setInput(e.target.value)}/>
            </form>
        </div>
    );
};

export default SearchBar;