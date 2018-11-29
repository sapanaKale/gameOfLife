const assert = require ("assert");
const { updateWorld,
        createBoard,
        declareDead,
        declareAlive,
        allPossibleNeighbours,
        extractNeighbours } = require ("../src/lib.js");

describe( "updateWorld" , function() {
  it( "should update state of provided live cells in given world" , function() {
    assert.deepEqual(updateWorld([['0,0','0,1'],['1,0','1,1']],['0,0','1,1']),[['L',' '],[' ','L']]);
  });
})

describe( "createBoard" , function() {
  it( "should return matrix according to the given bound " , function() {
    assert.deepEqual(createBoard({topLeft: [0,0], bottomRight: [1,1]}),[['0,0','0,1'],['1,0','1,1']]);
    assert.deepEqual(createBoard({topLeft: [1,1], bottomRight: [2,2]}),[['1,1','1,2'],['2,1','2,2']]);
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
      let product = [ '0,1', '0,2', '0,3', '1,1', '1,3', '2,1', '2,2', '2,3' ]; 
      assert.deepEqual(allPossibleNeighbours('1,2'),product);
    })
})

describe('extractNeighbours', function() {
  it('should return all valid neighbours for provided world and cell position', function() {
    assert.deepEqual(extractNeighbours({topLeft:[0,0],bottomRight:[2,2]},'0,1'),['0,0','0,2','1,0','1,1','1,2']);
  })
})
