const PouchDB = require('pouchdb');
const express = require('express');

const app = express();
app.use('/', require('express-pouchdb')(PouchDB));
app.listen(parseInt(process.env.PORT) || 3000);
