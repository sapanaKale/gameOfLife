const assert = require ("assert");
const { concat, convertToLinear, convertToMatrix, createBoard, createUniqueList, joinWithComa, declareAlive, declareDead } = require ("../src/util.js");

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

describe('declareAlive', function() {
    it('should updated cells as live as per provided live cells list ', function() {
      assert.deepEqual(declareAlive([['0,0','0,1'],['1,0','1,1']],'0,1'),[['0,0','L'],['1,0','1,1']]);
    })
})

describe('declareDead', function() {
    it('should updated cells as dead which are not lie in given world', function() {
     assert.deepEqual(declareDead(['L','0,1','1,0','L']),['L',' ',' ','L']);
    })
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
