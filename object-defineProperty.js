var task = {
  title: 'My task',
  description: 'Task description.'
}

Object.defineProperty(task, 'toString', {
  value: () => {
    return `${this.title}: ${this.description}`;
  },
  writable: false,
  enumerable: false,
  configurable: false
});


// inheritance:
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: () => {
    return `${this.title} is urgent.`;
  },
  writable: false,
  enumerable: false,
  configurable: false
});