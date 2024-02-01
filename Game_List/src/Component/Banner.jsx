import React, { useEffect } from 'react'

function Banner({ gameBanner }) {

    useEffect(() => {
       console.log("gameBanner",gameBanner)
    },[])

    if (!gameBanner) {
        // Handle the case when gameBanner is null or undefined
        return null;
    }
    return (
        <div>Banner
            <img src={gameBanner[0]?.background_image} alt="Banner Image" />

        </div>
    )
}

export default Banner