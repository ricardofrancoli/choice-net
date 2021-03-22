import React from 'react';
import homepageImg from '../images/homepageImgMin.jpg';

const Home = ({ startQuiz }) => {
	return (
		<div>
			<img src={homepageImg} alt='home-page' width='300px'></img>
			<h1>Start making good decisions!</h1>
			<button onClick={startQuiz}>Start</button>
		</div>
	);
};

export default Home;
