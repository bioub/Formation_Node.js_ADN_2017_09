module.exports = (req, res, next) => {
  // '123' correspond à token enregistrer
  // par une page de login dans une base
  //if (req.headers.authorization === '123') {
    return next();
  //}
  
  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized access',
  });
};