import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	imageStyle: {
		borderRadius: 20,
		boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.1)',
	},
	spacingStyle: {
		[theme.breakpoints.down('sm')]: {
			minHeight: '95vh',
			margin: '2.5vh 0',
		},
		[theme.breakpoints.up('sm')]: {
			minHeight: '80vh',
			margin: '10vh 0',
		},
	},
}));

const Question = ({ currentQuestion }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction={'column'}
			justify={'space-between'}
			alignContent={'center'}
			alignItems={'center'}
			className={classes.spacingStyle}
		>
			<Grid item xs={8} sm={6} md={4}>
				<img
					src={currentQuestion.imageUrl}
					alt='home-page'
					width={'100%'}
					className={classes.imageStyle}
				></img>
			</Grid>
			<Grid item xs={8}>
				<Typography variant='body1'>{currentQuestion.question}</Typography>
			</Grid>
			<Grid item>{currentQuestion.answers}</Grid>
		</Grid>
	);
};

export default Question;
