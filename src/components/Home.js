import React from 'react';
import homepageImg from '../images/homepageImgMin.jpg';
import { Button, Grid } from '@material-ui/core';

const Home = ({ startQuiz }) => {
	return (
		<div>
			<Grid
				container
				direction={'column'}
				spacing={0}
				justify={'center'}
				alignContent={'center'}
				alignItems={'center'}
				style={{ minHeight: '100vh' }}
			>
				<Grid item xs={12}>
					<img src={homepageImg} alt='home-page' width='300px'></img>
				</Grid>
				<Grid item xs={12}>
					<h1>Start making good decisions!</h1>
				</Grid>
				<Grid item xs={12}>
					<Button color='primary' onClick={startQuiz}>
						Start
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
