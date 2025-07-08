import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState, type BookDTO } from '../Utils/types';

export const createSlug = (title: string): string => {
  return title
    .replace(/[^\w\s-]/g, '') // Remove non-word chars except spaces and hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const ContentBar:React.FC = () => {

    const books: BookDTO[]  = useSelector((state: RootState) => state.books.books);

    return (
        <div>
            {books.map((book, i) => 
            (
                <div key={i}>
                    <a href={`book/${createSlug(book.title)}`}>
                        <button type='button' onClick={() => console.log(createSlug(book.title))}>{book.title}</button>
                    </a>
                </div>
            ))}
        </div>
    );
};