var rabbit = require('rabbit.js').createContext(process.env.RABBITMQ_URL);

var pub = rabbit.socket('PUSH');
pub.connect('content-worker');

var work = function() {
  console.log("Scheduling a job every 30 seconds so we stay up to date");
  pub.write(JSON.stringify({ foo: "test!" }), 'utf8');
};

setInterval(work, 30000);
