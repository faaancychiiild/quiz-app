import { Button } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
const Quiz = ({questions, score, setScore, amount}) => {
	const [i, setIndex] = useState(0);
	const [notClicked, setNotClicked] = useState(true);
	let [options, setOptions] = useState([]);
	let str = questions[i]?.question;
	let history = useHistory();
	useEffect(() => {
		if(questions.length > 0){
			let ops = questions[i]?.incorrect_answers;
			ops = ops.concat(questions[i]?.correct_answer);
			ops = ops.sort(() => (Math.random() > .5) ? 1 : -1);
			setOptions(ops);
		}
	}, [questions, i]);

	const handleCheck = (e) => {
		if(notClicked){
			if(e.target.value === questions[i]["correct_answer"]){
			setScore(score+=1);
		}else{
			e.target.style.backgroundColor = '#FF5733';
		}
		setNotClicked(false);
		}

	}
	const handleNext = () => {
		if(i >= amount-1){
			history.push('/result');
		}else{
			setIndex(i+1);
			setNotClicked(true);
		}
		
	}

	const Option = () => {
		return (
			<section className="ops-wrapper">
				{options.map(op => <Button onClick={handleCheck} variant="outlined" value={op} className="op-button" key={options.indexOf(op)}>{op}</Button>)}
			</section>
		)
	}

	return (
		<section className="quiz-form">
		<Button variant="contained" color="secondary">SCORE: {score}</Button>
		<p className="quiz-quest">{str}</p>
		<Option />
		<Button className="nav-buttons" onClick={handleNext}>Next question</Button>
		<Button className="nav-buttons" href="/">
            Quit
        </Button>
		</section>
		)
}
export default Quiz;
