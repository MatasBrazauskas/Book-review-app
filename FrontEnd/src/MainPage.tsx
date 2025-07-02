import React, { useState } from 'react';
import { Link }  from 'react-router-dom';

import { LoadingBar } from './LoadingBar/LoadingBar';
import { SearchBar } from './SearchBar/SearchBar';
import { ContentBar } from './ContentBar/ContentBar';

export type MainPageBookDTO = {
    id:number,
    title: string,
    author: string,
    publich_date: string,
}


export const MainPage:React.FC = _ => {

    const [bookArray, setBookArray] = useState<MainPageBookDTO[]>([]);

    return (
        <div>
            <LoadingBar/>
            <SearchBar bookArray={bookArray} setBookArray={setBookArray}/>
            <ContentBar bookArray={bookArray} setBookArray={setBookArray}/>

            <Link to="/add-book">Add Book Page</Link>
        </div>
    );
}