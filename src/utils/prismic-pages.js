const PROJECT_TEMPLATE  = require.resolve('../templates/Project.js');

module.exports = [
  {
    type: 'Project',
    match:'/:uid',
    path: '/',
    component: PROJECT_TEMPLATE
  }
]