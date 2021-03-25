import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { CSSTransition } from 'react-transition-group';

import './index.css';

const App = () => {
	const [showQuiz, setShowQuiz] = useState(false);

	if (showQuiz) {
		return <Quiz finishQuiz={() => setShowQuiz(false)} />;
	}

	return (
		<CSSTransition in={!showQuiz} appear={true} timeout={600} classNames='fade'>
			<Home startQuiz={() => setShowQuiz(true)} />
		</CSSTransition>
	);
};

export default App;
