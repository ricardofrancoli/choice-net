import { React } from 'react';
import homepageImg from '../images/homepageImgMin.jpg';
import { Button, Grid, Typography } from '@material-ui/core';

const Home = ({ startQuiz }) => {
	return (
		<Grid
			container
			direction={'column'}
			spacing={0}
			justify={'center'}
			alignContent={'center'}
			alignItems={'center'}
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={8} sm={4}>
				<img src={homepageImg} alt='home-page' width={'100%'}></img>
			</Grid>
			<Grid item xs={12} style={{ margin: '20px 15px 50px 15px' }}>
				<Typography variant='h3' align='center'>
					Start making good decisions!
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant='contained'
					size='large'
					style={{ backgroundColor: '#cf3476', color: '#fcfcfc' }}
					onClick={startQuiz}
				>
					Start
				</Button>
			</Grid>
		</Grid>
	);
};

export default Home;
