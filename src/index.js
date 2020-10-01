
exports.min = function min (array) {
  return array ? array.sort((prev, next) => prev - next)[0] || 0 : 0;
}

exports.max = function max (array) {
  return array ? array.sort((prev, next) => next - prev)[0] || 0 : 0;
}

exports.avg = function avg (array) {
	return array ? array.reduce((sum, item) => sum + (+item), 0) / array.length || 0 : 0;
}

