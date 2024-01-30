import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../Components/Banner';
function Home() {
  const[allGameList,setAllGameList]=useState();
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
      <div className='col-span-4 md:col-span-3'><Banner gameBanner={allGameList=[0]}/></div>
    </div>
  );
}

export default Home;
