//Create modules and import/export theme.

const greetings = require('./utils/functions');
const names = require ('./utils/names');

greetings(names.peopleOne);
greetings(names.peopleTwo); 