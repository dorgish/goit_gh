import Axios from 'axios';
import { searchRequest, searchSuccess, searchError } from './search-actions';

const search = (query, page) => async dispatch => {
    dispatch(searchRequest());

    try {
        const { data } = await Axios.get(
            `https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`
        );
        dispatch(searchSuccess(data.items));
    } catch (error) {
        dispatch(searchError(error.message));
    }
};

export { search };
