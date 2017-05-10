/**
 * A bit glumpsy when you want to call the repoFactory:
 *
 * repoFactory.getRepo('task').get(1);
 * repoFactory.getRepo('user').get(1);
 * repoFactory.getRepo('project').get(1);
 */
const repoFactory = () => {
  this.getRepo = (repoType) => {
    switch (repoType) {
      case 'task':
        if (this.taskRepo) { // from cache
          return this.taskRepo;
        } else {
          this.taskRepo = require("./taskRepository")();
          return this.taskRepo;
        }
      case 'user':
        if (this.userRepo) { // from cache
          return this.userRepo;
        } else {
          const userRepo = require("./userRepository")();
          return userRepo;
        }
      case 'project':
        if (this.projectRepo) { // from cache
          return this.projectRepo;
        } else {
          const projectRepo = require('./projectRepository')();
          return projectRepo;
        }
    }
  }
}

module.exports = new repoFactory;