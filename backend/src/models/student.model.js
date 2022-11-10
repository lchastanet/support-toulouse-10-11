const db = require("./db.js");

const findAll = () => {
  return db.query("SELECT * FROM `student`").catch((err) => console.log(err));
};

const createOne = (student) => {
  const { name, age } = student;

  return db
    .query("INSERT INTO student (name, age) VALUES (?, ?)", [name, age])
    .catch((err) => console.log(err));
};

module.exports = { findAll, createOne };
