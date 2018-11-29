const { splitNumbers,
        intersection,
        increamentList,
        joinWithComa,
        convertToLinear,
        convertToMatrix,
        createUniqueList,
        concat,
        cartesionProduct,
        isIncludes } = require("../src/util.js");

const createBoard = function(bound) {
  let x = bound.topLeft[0], xPrime = bound.bottomRight[0];
  let y = bound.topLeft[1], yPrime = bound.bottomRight[1];
  let rows = increamentList(x, xPrime);
  return rows.reduce( addRows.bind(null, y, yPrime), [] );
}

const addRows = function(y, yPrime, matrix, rowNumber) {
 let joinIndexes = joinWithComa.bind(null, rowNumber);
 let row = increamentList(y, yPrime).map( joinIndexes );
 matrix.push( row );
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

const isAlive = function ( liveCells, bound, cell ) {
  let neighbours = extractNeighbours( bound, cell );
  let liveCellsString = liveCells.map( x => x.toString() );
  let aliveNeighbours = intersection( neighbours, liveCellsString );
  let willRemainAlive = aliveNeighbours.length == 2 && liveCellsString.includes(cell);
  let willAlive = aliveNeighbours.length == 3;
  return willRemainAlive|| willAlive;
}

const nextGeneration = function (liveCells, bound) {
  let world = convertToLinear(createBoard(bound));
  let isCellAlive = isAlive.bind(null, liveCells, bound);
  return world.filter(isCellAlive).map(splitNumbers);
}

module.exports = {createBoard, 
                  addRows,
                  declareAlive, 
                  declareDead, 
                  updateWorld, 
                  allPossibleNeighbours,
                  extractNeighbours,
                  isAlive,
                  nextGeneration };
