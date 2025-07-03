import React from 'react';
import { Link }  from 'react-router-dom';
import { Provider } from 'react-redux';

import { LoadingBarTop } from './LoadingBar/LoadingBar';
import { SearchBar } from './SearchBar/SearchBar';
import { ContentBar } from './ContentBar/ContentBar';
import { store } from './State/store';

//import { type BookDTO } from './State/store';


export const MainPage:React.FC = _ => {

    //const [bookArray, setBookArray] = useState<BookDTO[]>([]);

    return (
        <div>
            <Provider store={store}>
                <LoadingBarTop/>
                <SearchBar/>{/* bookArray={bookArray} setBookArray={setBookArray}/>*/}
                <ContentBar/>{/* bookArray={bookArray} setBookArray={setBookArray}/>*/}
            </Provider>

            <Link to="/add-book">Add Book Page</Link>
        </div>
    );
}