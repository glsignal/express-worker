# Express Worker Example

The implements a sample worker structure, comprised of three parts:

- a web front end that allows jobs to be posted to the queue manually ([`POST /job` in routes/index.js](https://github.com/glsignal/express-worker/blob/master/routes/index.js))
- a poller which periodically schedules a job ([content-poller.js](https://github.com/glsignal/express-worker/blob/master/content-poller.js))
- the worker itself which executes these jobs ([content-worker.js](https://github.com/glsignal/express-worker/blob/master/content-worker.js))

The service used to pass messages between these different parts is called [RabbitMQ](https://www.rabbitmq.com/), and while it is a solid choice it is not the only one. There are plenty of options for implementing a worker queue - redis, rabbitmq, even your regular old database.

## Setup

Install the app requirements:

    $ npm install

Download [Rabbit MQ](http://www.rabbitmq.com/download.html) and run a local
server (`.env` specifies `ampq://localhost` by default)

Install node foreman to run the app:

    $ npm install -g node-forman

Start!

    $ nf start

The app will be available on http://localhost:5000/

Note that foreman (that `nf` command) will start three **processes**: one for the web front end, one for the poller, and one for the worker. These are declared in `Procfile`
