import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {userSlice} from './slices';

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
    }
}, applyMiddleware(thunk))