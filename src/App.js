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
  const [amount, setAmount] = useState(10);
  let [score, setScore] = useState(0);
  useEffect(()=>{
    axios.get('https://opentdb.com/api_category.php').then(res => setCategories(res.data.trivia_categories));
  }, []);

  const getQuestions = (category, difficulty) => {
    axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`).then(res => setQuestions(res.data.results));
  }
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch className="app">
          <Route path="/" exact>
            <Home categories={categories} getQuestions={getQuestions} 
            setQuestions={setQuestions} questions={questions} amount={amount} setAmount={setAmount}/>
          </Route>
          <Route path="/quiz" exact>
            {(questions!==[] ? <Quiz questions={questions} score={score} setScore={setScore} amount={amount}/> : <p>loading</p>)}
          </Route>
          <Route path="/result" exact>
            <section className="result">
              Your result is : <Button variant="outlined" className="nav-buttons">{score}</Button>
              <Button variant="contained" className="nav-buttons" href='/'>RESTART</Button>
            </section>
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
