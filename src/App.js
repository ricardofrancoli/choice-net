import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';

const App = () => {
	const [showQuiz, setShowQuiz] = useState(false);
	const toggleQuiz = () => setShowQuiz(!showQuiz);

	if (showQuiz) {
		return <Quiz finishQuiz={toggleQuiz} />;
	}

	return <Home startQuiz={toggleQuiz} />;
};

export default App;
