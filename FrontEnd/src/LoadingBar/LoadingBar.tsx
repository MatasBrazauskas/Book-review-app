import React, { useState} from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';
import { type RootState } from '../State/store';

export const LoadingBarTop:React.FC = () => {

    const [state, setState] = useState(true);
    const [procent, setProcent] = useState(10);
    //setState(useSelector((state: RootState) => state.books.loading));

    return (
        <div>
            {state && 
                <LoadingBar color='#f11946' progress={procent}/>
            }
        </div>
    );
};