const implementjs = require('implement-js');

const implement = implementjs.default;
const { Interface, type } = implementjs;

const PersistModule = Interface('PersistModule')({
  load: type('function'),
  add: type('function'),
  update: type('function'),
  remove: type('function'),
  clearAll: type('function'),
}, {
  strict: true,
  error: true,
});

module.exports = implement(PersistModule);
