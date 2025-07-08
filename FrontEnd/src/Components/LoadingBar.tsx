import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../Utils/types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export const LoadingBar:React.FC = () => {

    const loading = useSelector((state: RootState) => state.books.loading);

    return (
        <div>
            {loading && 
                <Box sx={{width: '100%'}}>
                    <LinearProgress />
                </Box>
            }
        </div>
    );
};