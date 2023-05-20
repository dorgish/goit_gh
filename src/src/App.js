import { useEffect } from 'react';
import List from './components/list/List';
import Main from './components/main/Main';

import Search from './components/search/Search';
import { useDispatch } from 'react-redux';
import { search } from './redux/search/search-operations';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getLoading } from './redux/search/search-selectors';

function App() {
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search());
    }, []);

    return (
        <Main>
            <Search />
            {isLoading ? (
                <ThreeDots wrapperStyle={{ justifyContent: 'center' }} color="darkGrey" height={120} width={120} />
            ) : (
                <List />
            )}
        </Main>
    );
}

export default App;
