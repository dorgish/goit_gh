import { useEffect, useState } from 'react';
import List from './components/list/List';
import Main from './components/main/Main';
import Search from './components/search/Search';
import { useDispatch } from 'react-redux';
import { search } from './redux/search/search-operations';
import { ThreeDots } from 'react-loader-spinner';
import { getLoading } from './redux/search/search-selectors';
import { useSelector } from 'react-redux';
import { getResult } from './redux/search/search-selectors';
import Pagination from '@material-ui/lab/Pagination';

function App() {
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();
    const results = useSelector(getResult);
    const [query, setQuery] = useState('react');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(search(query, currentPage));
    }, [dispatch, currentPage, query]);

    return (
        <Main>
            <Search setQuery={setQuery} setCurrentPage={setCurrentPage} />
            {isLoading ? (
                <ThreeDots wrapperStyle={{ justifyContent: 'center' }} color="darkGrey" height={120} width={120} />
            ) : (
                <>
                    <List data={results} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {!!results.length && (
                            <Pagination count={10} page={currentPage} onChange={(_, value) => setCurrentPage(value)} />
                        )}
                    </div>
                </>
            )}
        </Main>
    );
}

export default App;
