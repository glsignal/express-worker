# Express Worker Example

Example app using express, and implementing a background worker model.

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
