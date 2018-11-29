const { increamentList,
        joinWithComa,
        convertToLinear,
        convertToMatrix,
        createUniqueList,
        concat,
        cartesionProduct,
        isIncludes } = require("../src/util.js");

const createBoard = function(bound) {
  let x = bound.topLeft[0], x_prime = bound.bottomRight[0];
 let y = bound.topLeft[1], y_prime = bound.bottomRight[1];
 let matrix = [];
 for(let i = x; i <= x_prime; i++) {
   let joinIndexes = joinWithComa.bind(null,i);
   let row = increamentList(y, y_prime).map(joinIndexes);
   matrix.push(row);
 }
 return matrix;  
}

const updateWorld = function (world,liveCells) {
  let width = world[0].length;
  world = liveCells.reduce(declareAlive,world);
  world = convertToLinear(world).map(declareDead);
  return convertToMatrix(width, world);
}

const declareAlive = function (world, liveCells) {
  let row = liveCells.split(',')[0];
  let column = liveCells.split(',')[1];
  world[row][column] = 'L';
  return world;
}

const declareDead  = function (element) {
  return (element == 'L') ? element : ' ';
}

const allPossibleNeighbours = function (cell) {
  let x = +cell.split(',')[0];
  let y = +cell.split(',')[1];
  let neighbours = cartesionProduct( [x-1,x,x+1] , [y-1,y,y+1] );
  neighbours = neighbours.map(x=>x.toString());
  let index = neighbours.indexOf(cell);
  neighbours.splice(index,1);
  return neighbours;
}

const extractNeighbours = function(bound, cell) {
  let validCells = convertToLinear(createBoard(bound));
  let neighbourCells = allPossibleNeighbours(cell);
  let isValid = isIncludes.bind(null,validCells);
  return neighbourCells.filter(isValid);
}

module.exports = {createBoard, 
                  declareAlive, 
                  declareDead, 
                  updateWorld, 
                  allPossibleNeighbours,
                  extractNeighbours };
