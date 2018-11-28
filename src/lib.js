const { joinWithComa,
        convertToLinear,
        convertToMatrix,
        createUniqueList,
        concat } = require("../src/util.js");

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


module.exports = {createBoard, declareAlive, declareDead, updateWorld};
