
exports.min = function min (array =  []) {
  const minNum = array.sort((a,b) => a-b)[0]
  return minNum ? minNum : 0;
}

exports.max = function max (array = []) {
  const minNum = array.sort((a,b) => b-a)[0]
  return minNum ? minNum : 0;
}

exports.avg = function avg (array = []) {
  const average = (array.reduce((acc, item) => acc + item, 0)) / array.length
  return average ? average : 0
}
