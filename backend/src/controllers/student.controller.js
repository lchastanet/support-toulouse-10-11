const { findAll, createOne } = require("../models/student.model.js");

const getAll = (req, res) => {
  findAll().then(([result]) => res.send(result));
};

const addOne = (req, res) => {
  createOne(req.body).then(([result]) => {
    const { insertId } = result;

    res.status(201).send({ id: insertId, ...req.body });
  });
};

module.exports = { getAll, addOne };
