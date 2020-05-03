const PROJECT_TEMPLATE  = require.resolve('../templates/project.js');

module.exports = [
  {
    type: 'Project',
    match:'/:uid',
    path: '/',
    component: PROJECT_TEMPLATE
  }
]