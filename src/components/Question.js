import React, { useState } from 'react';
import outcomes from '../helpers/outcomes';
import questions from '../helpers/questions';
import Outcome from './Outcome';
// import homepageImg from '../images/homepageImgMin.jpg';

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [outcome, setOutcome] = useState(false);
	const [showOutcome, setShowOutcome] = useState(false);

	const handleQuizAnswer = (answerValue, nextQuestion) => {
		let sum = 0;
		sum += answerValue;
		console.log('sum', sum);

		if (nextQuestion) {
			setCurrentQuestion(currentQuestion + answerValue + 1);
			console.log(currentQuestion);
			return;
		}

		setOutcome(sum);
		setShowOutcome(true);
	};

	if (showOutcome) {
		return (
			<Outcome
				outcome={{
					title: outcomes[outcome].title,
					body: outcomes[outcome].body,
				}}
			/>
		);
	}
	return (
		<div>
			{/* // <img src={homepageImg} alt='home-page' width='300px'></img> */}
			<h1>{questions[currentQuestion].question}</h1>
			{questions[currentQuestion].answers.map((answer, key) => (
				<button
					key={key}
					onClick={() => handleQuizAnswer(answer.value, answer.nextQuestion)}
				>
					{answer.answer}
				</button>
			))}
		</div>
	);
};

export default Question;
