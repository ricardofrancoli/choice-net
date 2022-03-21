import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

const Outcome = ({ outcome, finishQuiz }) => {
  return (
    <Grid
      container
      direction={'column'}
      spacing={0}
      justify={'center'}
      alignContent={'center'}
      alignItems={'center'}
      style={{ minHeight: '100vh' }}>
      <Typography variant='h2'>{outcome.title}</Typography>
      <Grid item xs={6} sm={4} md={3} style={{ margin: '30px 0' }}>
        <Typography variant='body1'>{outcome.body}</Typography>
      </Grid>
      <Button
        onClick={finishQuiz}
        variant='contained'
        size='large'
        style={{ backgroundColor: '#cf3476', color: '#fcfcfc' }}>
        Home
      </Button>
    </Grid>
  );
};

export default Outcome;
