const questions = [
	{
		id: 1,
		question: 'Question1',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 0, nextQuestion: true },
			{ answer: 'Answer 2', value: 1, nextQuestion: true },
			{ answer: 'Answer 3', value: 2, nextQuestion: false },
		],
	},
	{
		id: 2,
		question: 'Question2',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 0 },
			{ answer: 'Answer 2', value: 1 },
			{ answer: 'Answer 3', value: 2 },
		],
	},
	{
		id: 3,
		question: 'Question3',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 0 },
			{ answer: 'Answer 2', value: 1 },
			{ answer: 'Answer 3', value: 2 },
		],
	},
];

export default questions;
