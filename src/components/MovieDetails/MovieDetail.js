import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './moviedetail.css'
const API_KEY = process.env.REACT_APP_API_KEY

function MovieDetail() {

    const [movie,setmovie] = useState({}) 
    const [trilerUrl,setTrailerUrl] =useState('')
    const [error,setError]=useState(false)
    const { id ,mediatype } =useParams()
    const navigate=useNavigate()

    const url=`https://api.themoviedb.org/3/${mediatype==='movie'?'movie':'tv'}/${id}?api_key=${API_KEY}`
    const fetchmovie = async ()=>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok){
                setmovie(data)
            }else{
                navigate('*')
            }
            
        }catch (error){
            navigate('*')
        }
    }
    useEffect(()=>{fetchmovie()},[id,mediatype])

    const handleplay = (movie) =>{
        if (trilerUrl){
            setTrailerUrl('')
        }else {
            movieTrailer(movie?.title||movie?.original_name ||movie?.name)
            .then((url)=>{
                if (url){
                    const parsedUrl = new URL(url)
                    setTrailerUrl(parsedUrl.search.slice(3,))
                }else{
                    setError(true)
                }
                
            })

        }
    }

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    

  return (
    <>
        <div className='wrapper'>
            {trilerUrl?<Youtube className='trailer' videoId={trilerUrl} opts={opts} />:(  
                error?<div className='error'><h1 className='error-text'>Doesn't have a Trailer</h1></div>:
                <div className='bannerm'>                
                <img className='bannerim' key={id} src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path||movie?.poster_path}`}/>
                <div className='bannerfadebottom'></div>
            </div>
            )
            
            }
        </div>   
        
    
        <div className='bannercontents'>
            <h1 className='bannertitle'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h1 className='bannerdescription'>{movie?.overview}</h1>
            <div className='banner_buttons'>
                <button onClick={()=>{handleplay(movie)}} className='banner_button' id='play'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
        </div>

    
    </>
    
  )
}

export default MovieDetail