const cartesionProduct = function(set1, set2) {
  let result = [];
  for (let index=0; index<set1.length; index++) {
    for (let pos=0; pos<set2.length; pos++) {
      result.push([set1[index],set2[pos]]);
    }
  }
  return result;
}

const joinWithComa = function(item1, item2) {
  return item1 + "," + item2;
}

const createUniqueList = function(size, element) {
  return new Array(size).fill(element);
}

const concat = function(list1,list2) {
  return list1.concat(list2);
}

const convertToLinear = function(matrix) {
  return matrix.reduce(concat,[]);
}

const convertToMatrix = function(width,list) {
  if(list.length == 0) {
    return [];
  }
  return [list.slice(0,width)].concat(convertToMatrix(width,list.slice(width)));
}

const increamentList = function(begin, end) {
 return new Array(end - begin + 1).fill(begin).map( (x,i) => x+i );
}

const isIncludes = function (source, element) {
  return source.includes(element);
}

module.exports = { isIncludes, increamentList, cartesionProduct,  joinWithComa, createUniqueList, concat, convertToMatrix, convertToLinear };
