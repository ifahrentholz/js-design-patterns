let repo = () => {
  const db = {};

  const get = (id) => {
    console.log("getting task:", id);
  }

  const save = (task) => {
    console.log("saving task:", task);
  }

  return {
    get,
    save
  }
}

module.exports = repo();