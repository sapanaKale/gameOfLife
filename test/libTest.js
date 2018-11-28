const assert = require ("assert");
const { updateWorld } = require ("../src/lib.js");

describe( "updateWorld" , function() {
  it( "should update state of provided live cells in given world" , function() {
    assert.deepEqual(updateWorld([['0,0','0,1'],['1,0','1,1']],['0,0','1,1']),[['L',' '],[' ','L']]);
  });
})

