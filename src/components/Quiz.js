import React, { useState } from 'react';
import outcomes from '../helpers/outcomes';
import questions from '../helpers/questions';
import Outcome from './Outcome';
import Question from './Question';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		border: '1px solid #cf3476',
		borderRadius: 20,
		color: '#cf3476',
		textTransform: 'none',
		boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.05)',
		'&:hover': {
			background: '#fdedf4',
		},
	},
});

const Quiz = ({ finishQuiz }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [outcomeValue, setOutcomeValue] = useState(0);
	const [showOutcome, setShowOutcome] = useState(false);

	const classes = useStyles();

	// Answers can have value 0, 1 or 2
	// If an answer is 0, the quiz finishes straight away -> setShowOutcome(true)
	// If an answer is 1 or 2:
	// -- we add it to outComeValue -> this will be counted later and give us an outcome depending on the result
	// -- then we jump 1 or 2 questions

	const handleQuizAnswer = (answerValue) => {
		if (answerValue) {
			setOutcomeValue(outcomeValue + answerValue);

			let jumpQuestion;
			answerValue === 2 ? (jumpQuestion = 1) : (jumpQuestion = 2);
			setCurrentQuestion(currentQuestion + jumpQuestion);

			return;
		}

		setShowOutcome(true);
	};

	// If showOutcome is true or we run out of questions in the questions array we show the outcome to the user
	if (showOutcome || currentQuestion >= questions.length) {
		let filterValue;

		// Outcome 1
		if (outcomeValue < 4) {
			filterValue = 1;
		}

		// Outcome 2
		if (outcomeValue >= 4 && outcomeValue <= 7) {
			filterValue = 2;
		}

		// Outcome 3
		if (outcomeValue >= 8) {
			filterValue = 3;
		}

		let outcome = outcomes.filter((outcome) => outcome.id === filterValue);

		return (
			<div>
				<Outcome
					outcome={{
						title: outcome[0].title,
						body: outcome[0].body,
					}}
					finishQuiz={finishQuiz}
				/>
			</div>
		);
	}

	const answersContainer = (
		<Grid container justify={'center'} alignItems={'center'}>
			{questions[currentQuestion].answers.map((answer, key) => (
				<Grid
					key={key}
					item
					container
					xs={11}
					sm={6}
					display='flex'
					justify='center'
					style={{ margin: '10px 0', minWidth: '20vw' }}
				>
					<Button
						className={classes.root}
						variant='outlined'
						color='secondary'
						onClick={() => handleQuizAnswer(answer.value)}
						style={{
							maxWidth: '70%',
							maxHeight: '8vh',
							minWidth: '70%',
							minHeight: '8vh',
						}}
					>
						{answer.answer}
					</Button>
				</Grid>
			))}
		</Grid>
	);

	return (
		<Question
			currentQuestion={{
				imageUrl: questions[currentQuestion].imageUrl,
				question: questions[currentQuestion].question,
				answers: answersContainer,
			}}
		/>
	);
};

export default Quiz;
