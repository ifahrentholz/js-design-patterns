const TaskRepo = () => {
  let taskRepo;

  function createRepo() {
    var taskRepo = new Object("Task");
    return taskRepo;
  }

  return {
    getInstance() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
};

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
  console.log("Same TaskRepo instance");
}