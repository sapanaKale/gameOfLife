const assert = require ("assert");
const { updateWorld,
        createBoard,
        declareDead,
        declareAlive } = require ("../src/lib.js");

describe( "updateWorld" , function() {
  it( "should update state of provided live cells in given world" , function() {
    assert.deepEqual(updateWorld([['0,0','0,1'],['1,0','1,1']],['0,0','1,1']),[['L',' '],[' ','L']]);
  });
})

describe( "createBoard" , function() {
  it( "should return empty matrix when row and column equal to zero" , function() {
    assert.deepEqual(createBoard(0, 0),[]);
  });

  it( "should return matrix of given row and column" , function() {
    assert.deepEqual(createBoard(2,2),[['0,0','0,1'],['1,0','1,1']]);
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
