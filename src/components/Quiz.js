import React, { useState } from 'react';
import outcomes from '../helpers/outcomes';
import questions from '../helpers/questions';
import Outcome from './Outcome';
// import homepageImg from '../images/homepageImgMin.jpg';

const Quiz = ({ finishQuiz }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [outcomeValue, setOutcomeValue] = useState(0);
	const [showOutcome, setShowOutcome] = useState(false);

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

	if (showOutcome || currentQuestion >= questions.length) {
		let filterValue;
		if (outcomeValue < 4) {
			filterValue = 1;
		}

		if (outcomeValue >= 4 && outcomeValue <= 7) {
			filterValue = 2;
		}

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

	return (
		<div>
			{/* // <img src={homepageImg} alt='home-page' width='300px'></img> */}
			<h1>{questions[currentQuestion].question}</h1>
			{questions[currentQuestion].answers.map((answer, key) => (
				<button key={key} onClick={() => handleQuizAnswer(answer.value)}>
					{answer.answer}
				</button>
			))}
		</div>
	);
};

export default Quiz;
