import React from 'react'
import Row from '../Row/Row'
import './rowlist.css'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <div className='rowlist'>
        <Row  fetchlink={requests.fetchTrending} gener={"Trending"} original={false}/>
        <Row  fetchlink={requests.fetchNetflixOriginals} gener={"Netflix Originals"} original={true}/>
        <Row  fetchlink={requests.fetchActionMovies} gener={"Action"} original={false}/>
        <Row  fetchlink={requests.fetchComedyMovies} gener={"Comedy"} original={false}/>
        <Row  fetchlink={requests.fetchHorrorMovies} gener={"Horror"} original={false}/>
        <Row  fetchlink={requests.fetchTopRatedMovies} gener={"Top Rated"} original={false}/>
        <Row  fetchlink={requests.fetchDcoumentaries} gener={"Documentaries"} original={false}/>
        
    </div>
  )
}

export default RowList 