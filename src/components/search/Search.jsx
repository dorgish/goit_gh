import { useEffect, useState } from 'react';
import s from './Search.module.css';
import useDebounce from '../../hooks/useDebounce';

const Search = ({ setQuery, setCurrentPage }) => {
    const [value, setValue] = useState('');

    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        let inputValue = debouncedValue || 'react';
        setQuery(inputValue);
        setCurrentPage(1);
    }, [debouncedValue, setQuery, setCurrentPage]);

    return (
        <input
            className={s.Search}
            placeholder="Search"
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
        />
    );
};

export default Search;
