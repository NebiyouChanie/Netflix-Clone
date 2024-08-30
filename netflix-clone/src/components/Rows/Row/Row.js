import React, { useEffect, useState } from 'react'
import './row.css'
//import axios from '../../../utils/axios'

function Row({fetchlink,gener,original}) {
const [movies,setmovies] =useState([])
const url ='https://api.themoviedb.org/3'+fetchlink
const baseurl='https://image.tmdb.org/t/p/original'
const fetchrowmoive = async () => {
    try{
    const response = await fetch(url);
    const data = await response.json()
    setmovies(data.results)}catch(error){
        console.log("faled to fetch")
    }
} 

useEffect(()=>{fetchrowmoive()},[fetchlink])


console.log(movies)
  return (
    <div>
        <div className='row'>
            <h1 className='gener'>{gener}</h1>
            <div className='movies'>
            {movies.map((movie)=>{
                const {backdrop_path,poster_path , id , title, original_name} = movie
                if (!backdrop_path) return null; // Skip movie if no image
                return <div className='moviecontainer'>
                            <img key={id} src={`${baseurl}${original?backdrop_path:poster_path}`} className={original?'orginals':'movie'}/>
        
                            {original?<h3 className='title'>{title || original_name}</h3>:null}         
                            {original?<div className='overlay'></div>:null}         
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Row