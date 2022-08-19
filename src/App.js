
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutview from './components/About';
import SearchView from './components/Search';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import MovieView from './components/Movieview';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    if(searchText){
    fetch (
      `https://api.themoviedb.org/3/search/movie?api_key=5bbc34d253fc39ed0d04c74f241d91f8&language=en-US&query=${searchText}&page=1&include_adult=false`)
     .then(response=>response.json())
     .then(data=>{
      setSearchResults(data.results)
     })}
  
  },[searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={Aboutview} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
