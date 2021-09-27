
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

    {/* Banner */}
    <Banner    />

      

      <Row 
      title = "NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals} 
      isLargeRow={true}
      />

      <Row title = "TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
      <Row title = "TOP RATED" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "ACTION MOVIES" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "ROMANCE MOVIES" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "DOCUMENTARY MOVIES" fetchUrl = {requests.fetchNetflixOriginals}/>



      
    
    </div>
  );
}

export default App;
