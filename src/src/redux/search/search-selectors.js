const getLoading = state => state.data.loading;
const getResult = state => state.data.result.items;
const getQuery = state => state.data.query;
const getPage = state => state.data.page;

export { getLoading, getResult, getQuery, getPage };
