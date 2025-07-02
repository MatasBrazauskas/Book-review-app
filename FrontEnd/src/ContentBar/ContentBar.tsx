import React from 'react';
import { type MainPageBookDTO }  from '../MainPage';

export type BookArraySetterAndGetter = {
    bookArray: MainPageBookDTO[],
    setBookArray: React.Dispatch<React.SetStateAction<MainPageBookDTO[]>>,
}

export const ContentBar:React.FC<BookArraySetterAndGetter> = ({bookArray, setBookArray} : BookArraySetterAndGetter) => {

    return (
        <div>
            {bookArray.map((book, i) => 
            (
                <div key={i}>{book.title}</div>
            ))}
        </div>
    );
};