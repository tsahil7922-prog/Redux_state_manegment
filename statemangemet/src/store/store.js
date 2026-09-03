import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlices';

export const store = configureStore({
    reducer:{
        // getting access of micro reducers of each reducer inside userSlice 
        users:userSlice
    }
})