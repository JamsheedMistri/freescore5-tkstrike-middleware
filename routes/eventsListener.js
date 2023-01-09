const express = require('express');

const router = express.Router();

router.get('/ping', (req, res) => {
	res.send({ status: 'ok' });
});

router.post('/new-match-event', (req, res) => {
	console.log('New Match Event:');
	console.log(req.body);
	res.send({ status: 'ok' });
});

router.post('/new-match-configured', (req, res) => {
	console.log('New Match Configured:');
	console.log(req.body);
	res.send({ status: 'ok' });
});

router.post('/match-result', (req, res) => {
	console.log('Match Result:');
	console.log(req.body);
	res.send({ status: 'ok' });
});

module.exports = router;
