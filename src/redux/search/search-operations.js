import Axios from 'axios';
import { searchRequest, searchSuccess, searchError, setQuery, setPage } from './search-actions';

const search = (query, page) => async dispatch => {
    dispatch(searchRequest());

    try {
        const { data } = await Axios.get(
            `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`
        );
        dispatch(searchSuccess(data));
        dispatch(setQuery(query));
        dispatch(setPage(page));
    } catch (error) {
        dispatch(searchError(error.message));
    }
};

export { search };
