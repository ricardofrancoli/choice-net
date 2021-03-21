import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Question from './components/Question';

const App = () => {
	const [showQuiz, setShowQuiz] = useState(false);
	const toggleHomepage = () => setShowQuiz(!showQuiz);

	if (!showQuiz) {
		return (
			<div>
				<Home handleOnClick={toggleHomepage} />
			</div>
		);
	} else {
		return <Question />;
	}
};

export default App;
