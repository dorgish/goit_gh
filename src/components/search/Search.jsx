import { useState } from 'react';
import s from './Search.module.css';

const Search = ({ debouncedChangeHandler }) => {
    const [value, setValue] = useState('');

    return (
        <input
            className={s.Search}
            placeholder="Search"
            value={value}
            onChange={event => {
                setValue(event.target.value);
                debouncedChangeHandler(event.target.value);
            }}
        />
    );
};

export default Search;
