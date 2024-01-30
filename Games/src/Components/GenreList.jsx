import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi';
function GenreList() {
    useEffect(() => {
        const fetchGenreList = async () => {
            try {
                // Call the getGenreList function and use await to get the response
                const resp = await GlobalApi.getGenreList();
                console.log(resp.data.results);
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
            GenreList
        </div>
    );
}

export default GenreList;