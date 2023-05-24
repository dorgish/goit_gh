import { useEffect, useState } from 'react';
import List from './components/list/List';
import Main from './components/main/Main';
import Search from './components/search/Search';
import { useDispatch } from 'react-redux';
import { search } from './redux/search/search-operations';
import { ThreeDots } from 'react-loader-spinner';
import { getLoading } from './redux/search/search-selectors';
import { useSelector } from 'react-redux';
import { getResult, getQuery, getPage } from './redux/search/search-selectors';
import Pagination from '@material-ui/lab/Pagination';

function App() {
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();
    const results = useSelector(getResult);
    const currentPage = useSelector(getPage);
    const query = useSelector(getQuery);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (results) return setData(results);
        dispatch(search(query, currentPage));
    }, [results, dispatch, currentPage, query]);

    const handleChange = (_event, value) => {
        dispatch(search(query, value));
    };

    return (
        <Main>
            <Search />
            {isLoading ? (
                <ThreeDots wrapperStyle={{ justifyContent: 'center' }} color="darkGrey" height={120} width={120} />
            ) : (
                <>
                    <List data={data} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {!!data.length && <Pagination count={10} page={currentPage} onChange={handleChange} />}
                    </div>
                </>
            )}
        </Main>
    );
}

export default App;
