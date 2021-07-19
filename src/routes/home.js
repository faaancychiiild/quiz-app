import { Button, MenuItem, TextField } from "@material-ui/core";
import '../App.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = ({categories, getQuestions, setQuestions, questions, amount, setAmount}) => {
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState('');
  let history = useHistory();

  useEffect(() => {
    setQuestions([]);
  }, [setQuestions])
	const handleChange = (e) => {
	    setCategory(e.target.value); 
	}
  const handleStart = () => {
  if(category && difficulty && amount){
    getQuestions(category, difficulty); 
    history.push('/quiz');
  }
  }
  

	return (
    <section className="home-wrapper">
	    <TextField 
	      select
	      className="categories"
	      label="Select category"
	      value={category}
	      onChange={handleChange}
	      required
		>
	      {categories.map(categ => (<MenuItem value={categ.id} key={categ.id}>{categ.name}</MenuItem>))}
	    </TextField>
	    <br></br>
	    <TextField
            required
            select
            label="Select Difficulty"
            className="categories"
            onChange={(e) => {setDifficulty(e.target.value)}}
            value={difficulty}
        >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
        </TextField>
        <br></br>
        <TextField
            required
            type="Number"
            label="Enter Number"
            className="categories"
            onChange={(e) => {setAmount(e.target.value)}}
            value={amount}
        />
        <br></br>
        <Button color="secondary" 
        variant="contained" className="categories btn"
        onClick={handleStart}
        >Start Quiz</Button>

    </section>
  );
}
export default Home;