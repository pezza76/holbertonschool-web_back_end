export default function concatArrays(array1, arr2) {
  return [...array1, ...arr2]
} 

console.log(concatArrays([1,2], 'hello'))

