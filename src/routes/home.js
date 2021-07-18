import { Button, MenuItem, TextField } from "@material-ui/core";
import '../App.css';
import { useState } from 'react';

const Home = ({categories}) => {
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const handleChange = (e) => {
	    setCategory(e.target.value); 
	}

	return (
    <div className="home-wrapper">
	    <TextField 
	      select
	      className="categories"
	      label="Select category"
	      value={category}
	      onChange={handleChange}
	      
		>
	      {categories.map(categ => (<MenuItem value={categ.id} key={categ.id}>{categ.name}</MenuItem>))}
	    </TextField>
	    <br></br>
	    <TextField
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
        <Button type="submit" 
        value="submit" color="secondary" 
        variant="contained" className="categories btn"
        href="/quiz"
        >Start Quiz</Button>

    </div>
  );
}
export default Home;