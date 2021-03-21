import React from 'react';

const Outcome = ({ outcome, finishQuiz }) => {
	return (
		<div>
			<h4>{outcome.title}</h4>
			<p>{outcome.body}</p>
			<button onClick={finishQuiz}>Go back to Home</button>
		</div>
	);
};

export default Outcome;
