import React, { useState } from 'react';
import outcomes from '../helpers/outcomes';
import questions from '../helpers/questions';
import Outcome from './Outcome';
import Question from './Question';
// import homepageImg from '../images/homepageImgMin.jpg';

const Quiz = ({ finishQuiz }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [outcomeValue, setOutcomeValue] = useState(0);
	const [showOutcome, setShowOutcome] = useState(false);

	// Answers can have value 0, 1 or 2
	// If an answer is 0, the quiz finishes straight away -> setShowOutcome(true)
	// If an answer is 1 or 2:
	// we add it to outComeValue -> this will be counted later and give us an outcome depending on the result
	// then we jump 1 or 2 questions

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
		<Question
			currentQuestion={{
				question: questions[currentQuestion].question,
				answers: questions[currentQuestion].answers.map((answer, key) => (
					<button key={key} onClick={() => handleQuizAnswer(answer.value)}>
						{answer.answer}
					</button>
				)),
			}}
		/>
	);
};

export default Quiz;
