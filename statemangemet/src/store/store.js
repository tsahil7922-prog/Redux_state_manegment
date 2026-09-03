import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlices';

export const store = configureStore({
    reducer:{
        // getting access of micro reducers of each reducer inside userSlice 
        users:userSlice
    }
})