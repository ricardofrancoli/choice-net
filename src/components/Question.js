import React from 'react';

const Question = ({ currentQuestion }) => {
	return (
		<div>
			<img src={currentQuestion.imageUrl} alt='home-page' width='300px'></img>
			<h1>{currentQuestion.question}</h1>
			<ul>{currentQuestion.answers}</ul>
		</div>
	);
};

export default Question;
