const assert = require ("assert");
const { createBoard, createUniqueList, joinWithComa } = require ("../src/util.js");

describe( "createBoard" , function() {
  it( "should return empty matrix when row and column equal to zero" , function() {
    assert.deepEqual(createBoard(0, 0),[]);
  });

  it( "should return matrix of given row and column" , function() {
    assert.deepEqual(createBoard(2,2),[['0,0','0,1'],['1,0','1,1']]);
  });
})


describe( "createUniqueList" , function() {
  it( "should return empty list with size is zero", function() {
    assert.deepEqual(createUniqueList(0, 0),[]);
  });

  it( "should return unique list of provided size and element" , function() {
    assert.deepEqual(createUniqueList(2,2),[2, 2]);
    assert.deepEqual(createUniqueList(3,4),[4, 4, 4]);
  });
})

describe( "joinWithComa" , function() {
  it( "should return coma separated string of provided elements", function() {
    assert.deepEqual(joinWithComa('a', 'b'),'a,b');
    assert.deepEqual(joinWithComa(0, 1),'0,1');
  });
})
