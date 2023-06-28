const candies = [
  { id: 1 , name: "Chocolate Bar", flavor: "Chocolate" },
  { id: 2 , name: "Gummy Bears", flavor: "Mixed Fruits" },
  { id: 3 , name: "Lollipop", flavor: "Strawberry" },
];

function getAllCandies(){
  return candies;
}
function getOneCandy(id){
  id = parseInt(id);
  return candies.find(candy => candy.id===id); 
}

function create(candy){
  candy.id = Date.now()%1000000;
  candies.push(candy);
}

function deleteOne(id){
  id = parseInt(id);
  const idx = candies.findIndex(candy => candy.id === id);
  candies.splice(idx, 1);
}  

module.exports = {
  getAllCandies,
  getOneCandy,
  create,
  deleteOne

};