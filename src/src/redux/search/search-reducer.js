import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { searchRequest, searchSuccess, searchError, setQuery, setPage } from './search-actions';

const result = createReducer([], {
    [searchSuccess]: (_, action) => action.payload,
});

const query = createReducer([], {
    [setQuery]: (_, action) => action.payload,
});

const page = createReducer([], {
    [setPage]: (_, action) => action.payload,
});

const loading = createReducer(false, {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchError]: () => false,
});

export default combineReducers({
    result,
    query,
    page,
    loading,
});
