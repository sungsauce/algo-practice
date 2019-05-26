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

describe('Create Pairs', function(){
  const reacto = new Reacto(['bob', 'mary'])
  // it('creates groups of 2 or 1', function () {
  //   expect( reacto.generate(['Bob', 'Sara', 'Karen']).every(pair => pair.length <= 3) ).toEqual( true )
  //   expect( reacto.generate(['Bob', 'Sara', 'Karen', 'Tom']).every(pair => pair.length <= 3) ).toEqual( true )
  // })
  // it('randomizes pairs', function () {
  //   const firstPair = reacto.generate(['Bob', 'Sara', 'Karen', 'Tom'])
  //   const secondPair = reacto.generate(['Bob', 'Sara', 'Karen', 'Tom'])
  //   expect( firstPair.toString() ).not.toMatch( secondPair.toString() )
  // })
  // it('doesn\'t repeat pairs', function () {
  //   const firstPair = reacto.generate(['Bob', 'Sara', 'Karen', 'Tom']).map(pair => pair.sort()).sort((a, b) => a[0].length - b[0].length)
  //   const secondPair = reacto.generate(['Bob', 'Sara', 'Karen', 'Tom']).map(pair => pair.sort()).sort((a, b) => a[0].length - b[0].length)
  //   // console.log("first: ", firstPair)
  //   // console.log("second: ", secondPair)
  //   expect( firstPair.toString() ).not.toMatch( secondPair.toString() )
  // })
});
