import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../Header';
// import QuickSearch from './QuickSearch';

const Home = () => {
    return(
        <>
            <Header/>
            <Search/>
            <QuickSearch/>
        </>
    )
}
export default Home;
