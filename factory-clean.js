/**
 * This style allows us to call the factory like so (clean):
 *
 * repoFactory.task.get(1);
 * repoFactory.user.get(1);
 * repoFactory.project.get(1);
 */
const repoFactory = () => {
  var repos = this;
  var repoList = [{
    name: 'task',
    source: "./taskRepository.js"
  }, {
    name: 'user',
    source: "./userRepository.js"
  }, {
    name: 'project',
    source: "./projectRepository.js"
  }];
  repoList.forEach((repo) => {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = repoFactory;