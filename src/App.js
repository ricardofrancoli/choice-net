import React, { useState } from 'react';
import Home from './components/Home';
import Question from './components/Question';
import Outcome from './components/Outcome';
import './App.css';

const App = () => {
	const [showQuiz, setShowQuiz] = useState(false);
	const [showOutcome, setShowOutcome] = useState(false);
	const startQuiz = () => setShowQuiz(true);
	const finishQuiz = () => {
		setShowQuiz(false);
		setShowOutcome(!showOutcome);
	};

	if (!showQuiz && !showOutcome) {
		return <Home handleOnClick={startQuiz} />;
	} else if (showOutcome) {
		return <Outcome handleOnClick={finishQuiz} />;
	} else {
		return <Question />;
	}
};

export default App;
