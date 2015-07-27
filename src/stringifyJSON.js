// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj, output) {
  // http://tobyho.com/2011/01/28/checking-types-in-javascript/ -- credit goes to TobyHo.com for this.
  // get the type of thing that obj is
  var objectType = Object.prototype.toString.call(obj);
  console.log(objectType);
  var output = output || [];
  // for each possibility, create an if statement that details how to stringify the object
  switch (objectType) {
    case '[object Number]':
      output.push(obj);
      break;
    case '[object Null]':
      output.push('null');
      break;
    case '[object Boolean]':
      if (obj) {
        output.push('true');
      } else {
        output.push('false');
      }
      break;
    case '[object String]':
      output.push('"' + obj + '"');
      break;
    case '[object Array]':
      // add '"[' to the answer to this case.
      // for every item in this array, stringify it seperately.
      var arrayFlattener = [];
      for (var i = 0; i < obj.length; i++) {
        arrayFlattener.push(stringifyJSON(obj[i]));
      }
      output.push('[' + arrayFlattener.join(',') + ']');
      break;
    case '[object Object]':
      var stringOfObject = '{';
      for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) === '[object Function]' ||
          Object.prototype.toString.call(obj[key]) === '[object Undefined]') {
          stringOfObject += '';
        } else {
          stringOfObject += '"' + key + '":';
          stringOfObject += stringifyJSON(obj[key]) + ',';
        }
      }
      if (stringOfObject.charAt(stringOfObject.length - 1) === ',') {
        stringOfObject = stringOfObject.slice(0, stringOfObject.length - 1); // We're getting rid of the trailing comma in this line - so if it's now "1, 2, 3, 4, 5,", the length is 10, and a slice from 0-9 is 1, 2, 3, 4, 5
      }
      stringOfObject += '}';
      output.push(stringOfObject);
      break;
    case '[object Function]':
    case '[object Undefined]':
      output.push('');
      break;
  } // end Switch
  // push the stringified object to an output array.
  // join the array as a string
  var outputStr = output.join(',');
  // return the output string.
  return outputStr;
};
