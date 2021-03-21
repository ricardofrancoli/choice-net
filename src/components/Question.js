import React, { useState } from 'react';
import questions from '../questions';
// import homepageImg from '../images/homepageImgMin.jpg';

const Question = ({ handleOnClick }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<div>
			{/* // <img src={homepageImg} alt='home-page' width='300px'></img> */}
			<h1>{questions[currentQuestion].question}</h1>
			{questions[currentQuestion].answers.map((answer) => (
				<button>{answer.answer}</button>
			))}
		</div>
	);
};

export default Question;
