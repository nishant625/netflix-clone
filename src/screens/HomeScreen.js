import React from 'react'
import './homeScreen.css' 
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'

const HomeScreen = () => {
  return (
    <div className='homescreen' >
    <Nav/>

    <Banner/>
    
    <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} />
    <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
    <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
    <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
    <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
    <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
    <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen