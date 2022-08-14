
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutview from './components/About';
import SearchView from './components/Search';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');


  return (
    <div>
      <Navbar searchText={searchText} setSearchResults={setSearchResults}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={Aboutview} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
