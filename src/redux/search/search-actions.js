import { createAction } from '@reduxjs/toolkit';

const searchRequest = createAction('search/searchRequest');
const searchSuccess = createAction('search/searchSuccess');
const searchError = createAction('search/searchError');

export { searchRequest, searchSuccess, searchError };
