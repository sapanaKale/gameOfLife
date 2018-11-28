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

const updateWorld = function (currentWorld,liveCells) {
  currentWorld = liveCells.reduce(declareAlive,currentWorld);
  return currentWorld.map(declareDead);
}

const declareAlive = function (world, liveCells) {
  let row = liveCells.split(',')[0];
  let column = liveCells.split(',')[1];
  world[row][column] = 'L';
  return world;
}

const declareDead  = function (cells) {
  return cells.map(function(element) {
    if (element == 'L') {
       return element ;
    }
    return ' ';
  });
}


module.exports = {createBoard, declareAlive, declareDead, updateWorld};
