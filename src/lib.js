const {declareAlive,
       declareDead} = require("../src/util.js");

const updateWorld = function (currentWorld,liveCells) {
  currentWorld = liveCells.reduce(declareAlive,currentWorld);
  return currentWorld.map(declareDead);
}

module.exports = {updateWorld};
