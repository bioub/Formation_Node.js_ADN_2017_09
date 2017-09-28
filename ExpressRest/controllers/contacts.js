const Model = require('../models/contact');

exports.list = (req, res) => {
  res.json(Model.getList());
};

exports.show = (req, res) => {
  const id = Number(req.params.id);

  const obj = Model.get(id);

  if (!obj) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  res.json(obj);
}