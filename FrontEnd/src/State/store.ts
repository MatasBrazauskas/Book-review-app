import { configureStore, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export type BookDTO = {
    id:number,
    title: string,
    author: string,
    publish_date: string,
}

export type BooksState = {
    books: BookDTO[],
    loading: boolean,
    error: string,
}

const initialState: BooksState = {
    books: [],
    loading: false,
    error: '',
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        fetchBooksRequest: (state) => {
            state.error = '';
            state.loading = true;
        },
        fetchBooksSuccess: (state, action: PayloadAction<BookDTO[]>) => {
            state.error = '';
            state.loading = false;
            state.books = action.payload;
        },
        fetchBooksFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
            state.books = []
        },
    }
});

export const { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } = booksSlice.actions;

export const BOOK_URL: string = import.meta.env.VITE_BOOK_URL;

export const fetchBooks = (titleQuery: string = '') => async (dispatch: AppDispatch) => {
    dispatch(fetchBooksRequest());

    try {
        const GET_BOOKS_URL = `${BOOK_URL}/get-books?book_title=${encodeURIComponent(titleQuery)}`;
        console.log("Fetching from:", GET_BOOKS_URL);

        const response = await axios.get(GET_BOOKS_URL);

        dispatch(fetchBooksSuccess(response.data));
    } catch (error: any) {
        let errorMessage = 'Failed to fetch books. Please check network.';
        if (axios.isAxiosError(error) && error.response) {
            errorMessage = error.response.data?.message || `Server Error: ${error.response.status}`;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }
        dispatch(fetchBooksFailure(errorMessage));
    }
}

export const store = configureStore({
    reducer:{
        books:booksSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
