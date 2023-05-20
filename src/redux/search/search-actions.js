import { createAction } from '@reduxjs/toolkit';

const searchRequest = createAction('search/searchRequest');
const searchSuccess = createAction('search/searchSuccess');
const searchError = createAction('search/searchError');
const setQuery = createAction('search/setQuery');
const setPage = createAction('search/setPage');

export { searchRequest, searchSuccess, searchError, setQuery, setPage };
