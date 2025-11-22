// Falsy Values -> 0, null, undefined, false, ''

const value = 10;

value && console.log('value is truthy');


// Falsy hoile, that is (0, null, undefined, false, '') ei shobgula hoile
value || console.log('value is falsy');

// Nullish Coalescing Operator -> value hodi null othoba undefined hoy,
value ?? console.log('value is nullish');

// if(!value) {
//   console.log('A is false')
// } else {
//   console.log('A is true')
// }

