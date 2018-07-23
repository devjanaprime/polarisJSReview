// basics
let numberThing = 45676;
let stringThing = 'asdfsfgdf';

// numeric operators
// ++, --, +=, -=, *, *=, /, /=
// any operator with a trailing "=" means to take the currrent value
// and apply the operation
// Ex: numberThing *= 2
// same as numberThing = numberThing * 2

// overloaded plus operators, can do multiple things
// + & +=
// do math addition OR concatenate text
// if JS thinks there a string, it will concatenate and retur text

function doSomething(){
  console.log( 'in doSomething' );
  return 'thingy';
} // end basic function

function average( num0, num1 ){
  console.log( 'in average', num0, num1 );
  return ( num0 + num1 ) / 2;
} // end average

function averageAllThese( arr ){
  console.log( 'in averageAllThese:', arr );
  let total = 0;
  // loop through array
  for( let number of arr ) {
    // add all of the items in the array to a "total"
    total += number;
  } //end for
  // divide total by array length
  return total / arr.length;
} // end averageAllThese

// conditional and objects
let Nevermind = {
  artist: 'Nirvana',
  year: '1991'
}
let StadiumArcadium = {
  artist: 'Red Hot Chili Peppers',
  year: '2006'
}
let Facelift = {
  artist: 'Alice In Chains',
  year: '1991'
}
let JoshuaTree = {
  artist: 'U2',
  year: '1987'
}
let RustInPeace = {
  artist: 'Megadeth',
  year: '1989'
}

let albums = [ Nevermind, StadiumArcadium, Facelift, JoshuaTree, RustInPeace ];

function getAlbumsFromYear( albumsArray, year ){
  console.log( 'in getAlbumsFromYear', albumsArray, year );
  let matches = [];
  // loop through albumsArray
  for( let album of albumsArray ){
    // for each album, check if album.year === year
    if( Number( album.year ) === year ){
      // if year is the same, push into a "matches" array
      matches.push( album );
    } //end if
  } // end for
  // return matches
  return matches;
} // end getAlbumsFromYear
