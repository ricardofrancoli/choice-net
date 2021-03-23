import React from 'react';
import { Grid } from '@material-ui/core';

const Question = ({ currentQuestion }) => {
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
					<img src={currentQuestion.imageUrl} alt='home-page' width={300}></img>
				</Grid>
				<Grid item xs={12}>
					<h1>{currentQuestion.question}</h1>
				</Grid>
				<Grid item xs={12}>
					<Grid container justify={'center'} alignItems={'stretch'}>
						{currentQuestion.answers}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Question;
