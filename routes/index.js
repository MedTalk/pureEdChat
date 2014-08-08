var express = require('express');
var jwt = require('jsonwebtoken');
var jwtSecret = 'oiwefhdjhvUhasDHuaSDEFSDCJsdkfjdsfssdoreotirhjkd';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chatroom', function(req, res){
	res.render('chatroom');
});

router.post('/login', function(req, res){

	console.log(req.body);

	var profile = {
		userEmail: req.body.email
	}

	var pass = validateToken(profile, function(result){
		if(result ==true){
			var token = jwt.sign(profile, jwtSecret, { exporesInMinutes: 60*5});
			res.json({token: token, error: 0});
		} else {
			res.json({error: 'Login false'})
		}
	});
	
});

router.get('/whiteboard', function(req, res){
	res.render('whiteboard');
});

router.get('/teacherboard', function(req, res){
	res.render('teacherboard');
});

router.get('/studentboard', function(req, res){
	res.render('studentboard');
});

function validateToken(profile, callback) {
	callback(true);
}

module.exports = router;
