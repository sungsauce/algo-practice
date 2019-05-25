describe('Three', function(){
  // beforeAll(function () {
  //   spyOn(window, 'swap').and.callThrough();
  // });
  it('handles an array with only 1 repeated integer', function () {
    expect( three([13, 19, 13, 13]) ).toEqual( 19 )
  })
  it('handles an array with 2 repeated integers', function(){
    expect( three([6, 1, 3, 3, 3, 6, 6]) ).toEqual( 1 );
    // expect(window.swap.calls.count()).toEqual(4);
  });
  it('handles an array with 2 repeated integers', function(){
    expect( three([4, 1, 2, 1, 2, 1, 2]) ).toEqual( 4 );
    // expect(window.swap.calls.count()).toEqual(4);
  });
});

describe('Clock', function(){
  it('adds 30 minutes', function () {
    expect( clock('1:30', 30) ).toEqual( '2:00' )
  })
  it('can handle minutes under 10', function () {
    expect( clock('1:30', 35) ).toEqual( '2:05' )
  })
  it('maintains a 12-hr format', function () {
    expect( clock('1:23', 456789) ).toEqual( '6:32' )
  })
});
