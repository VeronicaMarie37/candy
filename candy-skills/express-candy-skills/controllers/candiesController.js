const candy = require('../models/candy');

module.exports = {
  index,
  show,
 new:newCandy,
  create,
  delete:deleteCandy,
};
// Display list of candies
function index(req, res) {
  res.render('candies/index',{candies: candy.getAllCandies()});
}

// Display details of a specific candy
function show(req, res) {

   res.render('candies/show', { candy:candy.getOneCandy(req.params.id) });
}

// Display form for creating a new candy
function newCandy(req, res) {
  res.render('candies/new');
}

// Add a new candy
function create(req, res) {
 candy.create(req.body);
  res.redirect('/candies');
}

// Delete a candy
function deleteCandy(req, res){
  candy.deleteOne(req.params.id);
  res.redirect('/');

} 


