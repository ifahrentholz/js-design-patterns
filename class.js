class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = data.completed || false;
  }

  complete() {
    console.log("Completing task:", this.name);
    this.completed = true;
  }

  save() {
    console.log("Saving task:", this.name);
  }
}

let task1 = new Task({
  name: "Genug trinken",
  completed: false
});

let task2 = new Task({
  name: "Arbeitszeit loggen",
  completed: false
});

task2.complete();
task1.save();