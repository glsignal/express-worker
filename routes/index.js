var express = require('express');
var router = express.Router();

var rabbit = require('rabbit.js').createContext(process.env.CLOUDAMQP_URL);

var pub = rabbit.socket('PUSH');
pub.connect('content-worker');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST a new job. */
router.post('/job', function(req, res, next) {
  console.log("Manually queuing a job");
  pub.write(JSON.stringify({ foo: "test!" }), 'utf8');
  res.redirect('/');
});

module.exports = router;
