const path = require(`path`)
const PROJECT_TEMPLATE  = path.join(__dirname, '../templates', 'Project.js');

module.exports = [
  {
    type: 'Project',
    match:'/:uid',
    path: '/',
    component: PROJECT_TEMPLATE
  }
]