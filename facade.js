let TaskModel = function (data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

/**
 * Intentionlly really bad service / api which
 * could need a facade to hide it's ugliness behind
 * a beautiful interface.
 */
const TaskService = function () {
  return {
    complete: (task) => {
      task.completed = true;
      console.log(`completing task ${task.name}`);
    },

    setCompletedDate: (task) => {
      task.completedDate = new Date();
      console.log(`${task.name} completed on ${task.completedDate}`);
    },

    notifyCompletion: (task, user) => {
      console.log(`Notifying ${user} about completion of ${task.name}`);
    },

    save: (task) => {
      console.log(`saving task: ${task.name}`);
    }
  }
}();

const TaskServiceWrapper = function () {

  var completeAndNotify = function (task) {
    TaskService.complete(task);
    if (task.completed) {
      TaskService.setCompletedDate(task);
      TaskService.notifyCompletion(task, task.user);
      TaskService.save(task);
    }
  }

  return {
    completeAndNotify: completeAndNotify
  };
}();

var myTask = new TaskModel({
  name: 'My name',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);