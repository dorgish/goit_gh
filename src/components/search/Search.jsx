import { useState, useMemo } from 'react';
import s from './Search.module.css';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/search/search-operations';

import debounce from 'lodash.debounce';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const changeHandler = event => {
        event.preventDefault();

        let inputValue = event.target.value || 'react';

        dispatch(search(inputValue, 1));
    };

    const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 500), []);

    return (
        <input
            className={s.Search}
            placeholder="Search"
            value={value}
            onChange={event => {
                debouncedChangeHandler(event);
                setValue(event.target.value);
            }}
        />
    );
};

export default Search;
