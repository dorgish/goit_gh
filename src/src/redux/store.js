import { configureStore } from '@reduxjs/toolkit';
import data from './search/search-reducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        data,
    },
    middleware: [thunk],
});

export { store };
