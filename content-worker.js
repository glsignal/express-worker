var rabbit = require('rabbit.js').createContext(process.env.RABBITMQ_URL);

var sub = rabbit.socket('WORKER', { prefetch: 1 });

sub.connect('content-worker');
sub.setEncoding('utf8');

sub.on('data', function(data) {
  var job = JSON.parse(data);
  console.log("We've received a job! Let's do some hard work.", job);

  // Notify the queue that we were successful, and allow us to receive the next
  // job
  sub.ack();
});
