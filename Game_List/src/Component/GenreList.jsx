import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
function GenreList() {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const fetchGenreList = async () => {
            try {
                // Call the getGenreList function and use await to get the response
                const resp = await GlobalApi.getGenreList();
                console.log(resp.data.results);
                setGenreList(resp.data.results);
            } catch (error) {
                // Handle errors
                console.error('Error fetching genre list:', error);
            }
        };

        // Call the async function
        fetchGenreList();
    }, []);

    return (
        <div>
            <h2 className='text-[30px] font-bold'>Genre</h2>
            {genreList.map((item, index) => (
                <div
                    onClick={() => setActiveIndex(index)}
                    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-slate-300 p-2 rounded-lg group
    ${activeIndex === index ? "bg-slate-300" : null}`}
                >
                    <img
                        src={item.image_background}
                        className={`w-[120px] h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all-ease-out
      duration-300 ${activeIndex === index ? "scale-105" : null}`}
                    />
                    <h3
                        className={`group-hover:font-bold transition-all-ease-out duration-300
      ${activeIndex === index ? "scale-105" : null}`}
                    >
                        {item.name}
                    </h3>
                </div>
            ))}




        </div>
    );
}

export default GenreList;