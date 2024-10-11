import React, { useEffect, useRef, useState } from 'react';
import './banner.css';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import { Link } from 'react-router-dom'


function Banner() {

  const [movie,setMovie]=useState([]);
  const hasfetched  = useRef(false);
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if (hasfetched.current) return;
    hasfetched.current =true;
    (async () => {
      try{
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
      }catch(error) {
        console.log("error: ",error)
      }
    })()
  },[])

  useEffect(() => {
    if (movie?.backdrop_path) {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
      img.onload = () => setLoading(false);  
    }
  }, [movie]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  return (
    <div
      className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className='banner_contents'>

        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {!loading && (<div className='banner_buttons'>

          <Link to={`/movies/${movie.id}/tv`}>
              <button className='banner_button' id='play'>Play</button>
              {console.log(movie.id)}
              {console.log(movie)}
          </Link>
          <button className='banner_button'>My List</button>

        </div>)}

        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className='banner_fadebottom'></div>
 
    </div>
  )
}

export default Banner