import { store } from "../Store";

export type BooksInformation = {
    id?: number,
    title:string,
    author: string,
    pageCount: number,
    content: string,
    publishDate: string,
    additionDate: string,
}

export type BooksState = {
    books: BookDTO[],
    loading: boolean,
    error: string,
}

export type BookFormErrors = {
    title?: string,
    author?: string,
    pageCount?: string,
    content?: string,
    publishDate?: string,    
}

export type BookFormState = {
    bookObj: BooksInformation;
    errors: BookFormErrors;
}

export type BookAction = 
    | { type:'UPDATE', field: keyof FormData, value: any}
    | { type:'ERRORS', errors: BookFormErrors}
    | { type:'RESET'}

export type ReviewInfomation = {
    bookId: number,
    reviewerName: string,
    content: string,
    rating: number,
}

export type ReviewFormError = {
    reviewerName?: string,
    content?: string,
    rating?: string,
}

export type ReviewFormState = {
    reviewObj: ReviewInfomation,
    errors: ReviewFormError,
}

export type ReviewAction = 
    | { type: 'UPDATE', field: keyof FormData; value: any; }
    | { type: 'ERRORS', errors: ReviewFormError }
    | { type: 'RESET'}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type BookDTO = {
    id:number,
    title: string,
    author: string,
    publish_date: string,
}