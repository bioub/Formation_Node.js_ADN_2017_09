const Model = require('../models/contact');

exports.list = (req, res, next) => {
  res.json(Model.getList());
};

exports.show = (req, res, next) => {
  const id = Number(req.params.id);

  const obj = Model.get(id);

  if (!obj) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  res.json(obj);
};

exports.add = (req, res, next) => {
  console.log(req.body);
  const contact = Model.create(req.body);
  res.statusCode = 201;
  res.json(contact);
};

exports.remove = (req, res, next) => {
  const id = Number(req.params.id);
  
  const contact = Model.remove(id);

  if (!contact) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  res.json(contact);
};