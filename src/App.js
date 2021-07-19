import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './routes/home';
import Header from './components/header';
import Quiz from './routes/quiz'
import { Button } from "@material-ui/core";

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  let [score, setScore] = useState(0);
  useEffect(()=>{
    axios.get('https://opentdb.com/api_category.php').then(res => setCategories(res.data.trivia_categories));
  }, []);

  const getQuestions = (category, difficulty, amount) => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`).then(res => setQuestions(res.data.results));
  }
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch className="app">
          <Route path="/" exact>
            <Home categories={categories} getQuestions={getQuestions} setQuestions={setQuestions} questions={questions}/>
          </Route>
          <Route path="/quiz" exact>
            {(questions!==[] ? <Quiz questions={questions} score={score} setScore={setScore}/> : <p>loading</p>)}
          </Route>
          <Route path="/result" exact>
            <section className="result">
              <Button variant="outlined" className="nav-buttons">Your result is {score}</Button>
              <Button variant="contained" className="nav-buttons" href='/'>RESTART</Button>
            </section>
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
