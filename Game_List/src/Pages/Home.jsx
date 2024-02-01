import React, { useEffect, useState } from 'react';
import GenreList from '../Component/GenreList'
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Component/Banner';
function Home() {
    const [allGameList, setAllGameList] = useState();
    useEffect(() => {
        getAllGameList();
    }, []);

    const getAllGameList = () => {
        GlobalApi.getAllGames().then((resp) => {
            setAllGameList(resp.data.results); //
        });
    };

    return (
        <div className='grid grid-cols-4 p-2'>
            <div className='hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                <Banner gameBanner={allGameList && allGameList.length > 0 ? allGameList : null} />

                </div>
        </div>
    );
}

export default Home;