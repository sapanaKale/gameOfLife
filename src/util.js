const createBoard = function(height, width) {
  let board = createUniqueList(height, width);
  board = board.map(function(size, index) {
    let row = createUniqueList(size, index);
    return row.map(joinWithComa);
  });
  return board;
}

const joinWithComa = function(item1, item2) {
  return item1 + "," + item2;
}

const createUniqueList = function(size, element) {
  return new Array(size).fill(element);
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
 

module.exports = { createBoard, joinWithComa, createUniqueList, declareAlive, declareDead };
