import React from 'react';
import { Link }  from 'react-router-dom';
import { Provider } from 'react-redux';

import { LoadingBar } from '../Components/LoadingBar';
import { SearchBar } from '../Components/SearchBar';
import { ContentBar } from '../Components/ContentBar';
import { store } from '../Store';

export const MainPage:React.FC = () => {
    return (
        <div>
            <Provider store={store}>
                <LoadingBar/>
                <SearchBar/>
                <ContentBar/>
            </Provider>

            <Link to="/add-book">Add Book Page</Link>
        </div>
    );
}