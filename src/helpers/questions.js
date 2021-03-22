// value: 0 exits the quiz
// value: 1 adds 1 to a tally and jumps 2 questions in the quiz
// value: 2 adds 2 to a tally and jumps 1 question in the quiz

const questions = [
	{
		id: 1,
		question: 'Question1',
		imageUrl:
			'https://images.unsplash.com/photo-1597482404463-9c4c9f5afe58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: 'Answer 1', value: 2 },
			{ answer: 'Answer 2', value: 1 },
			{ answer: 'Answer 3', value: 1 },
			{ answer: 'Answer 4', value: 0 },
		],
	},
	{
		id: 2,
		question: 'Question2',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 1 },
			{ answer: 'Answer 2', value: 0 },
			{ answer: 'Answer 3', value: 1 },
			{ answer: 'Answer 4', value: 2 },
		],
	},
	{
		id: 3,
		question: 'Question3',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 2 },
			{ answer: 'Answer 2', value: 1 },
			{ answer: 'Answer 3', value: 1 },
			{ answer: 'Answer 4', value: 2 },
		],
	},
	{
		id: 4,
		question: 'Question4',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 0 },
			{ answer: 'Answer 2', value: 2 },
			{ answer: 'Answer 3', value: 2 },
			{ answer: 'Answer 4', value: 1 },
		],
	},
	{
		id: 5,
		question: 'Question5',
		imageUrl: 'www.photorul.com',
		answers: [
			{ answer: 'Answer 1', value: 2 },
			{ answer: 'Answer 2', value: 0 },
			{ answer: 'Answer 3', value: 1 },
			{ answer: 'Answer 4', value: 1 },
		],
	},
];

export default questions;
