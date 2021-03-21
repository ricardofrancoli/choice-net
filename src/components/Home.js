import React from 'react';
import homepageImg from '../images/homepageImgMin.jpg';

const Home = ({ handleOnClick }) => {
	return (
		<div>
			<img src={homepageImg} alt='home-page' width='300px'></img>
			<h1>Start making good decisions!</h1>
			<button onClick={handleOnClick}>Start</button>
		</div>
	);
};

export default Home;
