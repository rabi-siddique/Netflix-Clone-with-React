import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import NavBar from './NavBar'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Row 
      title="NETFLIX ORIGNIALS" 
      fetchUrl={requests.fetchNetflixOrignials}
      isLargeRow />
      <Row 
      title="Action Movies" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row 
      title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>
      <Row 
      title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries}/>
      <Row 
      title="Romantic Movies" 
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row 
      title="Horro Movies" 
      fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
