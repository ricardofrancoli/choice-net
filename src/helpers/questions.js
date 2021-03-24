// value: 0 exits the quiz
// value: 1 adds 1 to a tally and jumps 2 questions in the quiz
// value: 2 adds 2 to a tally and jumps 1 question in the quiz

const questions = [
	{
		id: 1,
		question:
			'I have added random definitions of questions to show how the questions work in different lengths.',
		imageUrl:
			'https://images.unsplash.com/photo-1597482404463-9c4c9f5afe58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: '2 Points', value: 2 },
			{ answer: '1 Point', value: 1 },
			{ answer: '1 Point', value: 1 },
			{ answer: '0 Points', value: 0 },
		],
	},
	{
		id: 2,
		question: 'A sentence worded or expressed so as to elicit information',
		imageUrl:
			'https://images.unsplash.com/photo-1615653051904-d8e1e5b30519?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: '1 Point', value: 1 },
			{ answer: '0 Points', value: 0 },
			{ answer: '1 Point', value: 1 },
			{ answer: '2 Points', value: 2 },
		],
	},
	{
		id: 3,
		question: 'Ask (someone) questions, especially in an official context',
		imageUrl:
			'https://images.unsplash.com/photo-1616445138711-4e61bcf4a474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: '2 Points', value: 2 },
			{ answer: '1 Point', value: 1 },
			{ answer: '1 Point', value: 1 },
			{ answer: '2 Points', value: 2 },
		],
	},
	{
		id: 4,
		question:
			'A question is an utterance which typically functions as a request for information, which is expected to be provided in the form of an answer. Questions can thus be understood as a kind of illocutionary act.',
		imageUrl:
			'https://images.unsplash.com/photo-1536677893852-ab128e0a65d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: '0 Points', value: 0 },
			{ answer: '2 Points', value: 2 },
			{ answer: '2 Points', value: 2 },
			{ answer: '1 Point', value: 1 },
		],
	},
	{
		id: 5,
		question:
			'The principal use of questions is to elicit information from the person being addressed by indicating the information which the speaker (or writer) desires.',
		imageUrl:
			'https://images.unsplash.com/photo-1612015318575-cde6fb7797fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
		answers: [
			{ answer: '2 Points', value: 2 },
			{ answer: '0 Points', value: 0 },
			{ answer: '1 Point', value: 1 },
			{ answer: '1 Point', value: 1 },
		],
	},
];

export default questions;
