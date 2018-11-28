const assert = require ("assert");
const { concat, convertToLinear, convertToMatrix, createUniqueList, joinWithComa } = require ("../src/util.js");

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

describe('concat', function() {
    it('should concat provided lists', function() {
     assert.deepEqual(concat([1,2],[1,2]),[1,2,1,2]);
    })
})

describe('convertToLinear', function() {
    it('should return linear array for given matrix', function() {
     assert.deepEqual(convertToLinear([[1,2],[1,2],[3,4]]),[1,2,1,2,3,4]);
    })
})

describe('convertToMatrix', function() {
    it('should return matrix array for given linearArray', function() {
     assert.deepEqual(convertToMatrix(3,[1,2,1,2,3,4]),[[1,2,1],[2,3,4]]);
    })
})
