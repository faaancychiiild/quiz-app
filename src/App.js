import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './routes/home';
import Header from './components/header'

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    axios.get('https://opentdb.com/api_category.php').then(res => setCategories(res.data.trivia_categories));
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch className="app">
          <Route path="/" exact>
            
            <Home categories={categories}/>
          </Route>
          <Route path="/quiz" exact>
            <button></button>
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
