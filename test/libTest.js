const assert = require ("assert");
const { updateWorld,
        createBoard,
        declareDead,
        declareAlive,
        allPossibleNeighbours } = require ("../src/lib.js");

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
    it('should not update alive cell as dead',function() {
     assert.deepEqual(declareDead('L'),'L');
    })

    it('should update as dead if cell is not alive',function() {
     assert.deepEqual(declareDead('1'),' ');
    })
})

describe('allPossibleNeighbours', function() {
    it('should not update alive cell as dead',function() {
      let product = [ '1,3', '1,1', '2,2', '2,3', '2,1', '0,2', '0,3', '0,1' ]
      assert.deepEqual(allPossibleNeighbours('1,2'),product);
    })
})
