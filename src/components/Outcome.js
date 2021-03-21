import React from 'react';

const Outcome = ({ outcome, handleOnClick }) => {
	return (
		<div>
			<h4>{outcome.title}</h4>
			<p>{outcome.body}</p>
			<button onClick={handleOnClick}>Go back to Home</button>
		</div>
	);
};

export default Outcome;
