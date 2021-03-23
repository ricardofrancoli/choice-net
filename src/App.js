import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles';

const App = () => {
	const [showQuiz, setShowQuiz] = useState(false);
	const startQuiz = () => setShowQuiz(true);
	const finishQuiz = () => setShowQuiz(false);

	if (!showQuiz) {
		return <Home startQuiz={startQuiz} />;
	}

	return <Quiz finishQuiz={finishQuiz} />;
};

export default App;
