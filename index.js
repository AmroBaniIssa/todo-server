'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const { db } = require('./src/models/index');
const PORT = process.env.PORT || 3003;

db.sync().then(() => {
  server.start(PORT);
});
