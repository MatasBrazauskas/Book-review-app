import React from 'react';
import { type BookDTO } from '../State/store';

import { useSelector } from 'react-redux';
import { type RootState } from '../State/store';

/*export type BookArraySetterAndGetter = {
    bookArray: BookDTO[],
    setBookArray: React.Dispatch<React.SetStateAction<BookDTO[]>>,
}*/

export const ContentBar:React.FC = () => {

    const books: BookDTO[]  = useSelector((state: RootState) => state.books.books);
    console.log(books);

    return (
        <div>
            {books.map((book, i) => 
            (
                <div key={i}>{book.title}</div>
            ))}
        </div>
    );
};