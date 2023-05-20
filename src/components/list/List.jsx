import { useEffect, useState } from 'react';
import s from './List.module.css';
import ListItem from './listItem/ListItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/search/search-operations';
import { getResult, getQuery, getPage } from '../../redux/search/search-selectors';
import Pagination from '@material-ui/lab/Pagination';

const List = () => {
    const results = useSelector(getResult);
    const currentPage = useSelector(getPage);
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const query = useSelector(getQuery);

    useEffect(() => {
        if (!results) return;
        setData(results);
    }, [results]);

    const handleChange = (_event, value) => {
        dispatch(search(query, value));
    };

    return (
        <div className={s.List}>
            {data.length ? (
                data.map(item => <ListItem key={item.id} data={item} />)
            ) : (
                <span>По Вашому запиту не знайдено жодного репозиторія </span>
            )}
            <Pagination count={10} page={currentPage} onChange={handleChange} />
        </div>
    );
};

export default List;
