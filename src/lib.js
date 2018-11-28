const { joinWithComa,
        convertToLinear,
        convertToMatrix,
        createUniqueList,
        concat,
        cartesionProduct } = require("../src/util.js");

const createBoard = function(height, width) {
  let board = createUniqueList(height, width);
  return board.map(function(size, index) {
    let row = createUniqueList(size, index);
    return row.map(joinWithComa);
  });
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
  let neighbours = cartesionProduct( [x,x+1,x-1] , [y,y+1,y-1] );
  neighbours = neighbours.map(x=>x.toString());
  let index = neighbours.indexOf(cell);
  neighbours.splice(index,1);
  return neighbours;
}

module.exports = {createBoard, declareAlive, declareDead, updateWorld, allPossibleNeighbours};
