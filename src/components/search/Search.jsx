import { useEffect, useState } from 'react';
import s from './Search.module.css';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/search/search-operations';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        let inputValue = debouncedValue || 'react';
        dispatch(search(inputValue, 1));
    }, [debouncedValue, dispatch]);

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <input
            className={s.Search}
            placeholder="Search"
            value={value}
            onChange={event => {
                handleChange(event);
                setValue(event.target.value);
            }}
        />
    );
};

export default Search;
