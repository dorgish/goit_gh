import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { searchRequest, searchSuccess, searchError } from './search-actions';

const result = createReducer([], {
    [searchSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchError]: () => false,
});

export default combineReducers({
    result,
    loading,
});
