import React ,{useEffect} from "react";
import { useState } from "react";
function Home(){
    const [popularMovie, setMovie]=useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => console.log(data.results))
    }, [])
    return(
        <div>
            <h1>Home</h1>

        </div>
    )
}

export default Home;