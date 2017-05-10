'use strict';

const Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log("completing task:", this.name);
}

Task.prototype.save = function () {
  console.log("saving:", this.name);
}


const UrgentTask = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
}

// needed to be a sub"class" of Task (true inheritance)
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.save = function () {
  console.log("do special stuff here");
  Task.prototype.save.call(this);
}

var ut = new UrgentTask('this is urgent', 1);
ut.save();
ut.complete();
console.log(ut);