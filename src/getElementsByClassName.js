// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, output) {
  // your code here
  //get the node
  element = element || document.body;
  output = output || [];
  //test node for the given className
  if (_.contains(element.classList, className)) {
    output.push(element);
  }
  //if node has given class name then push on to new array
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      getElementsByClassName(className, child, output);
    }
  return output;
  //check the children of document.body for the given className
  //if any of the children contain the className push it on to the new array
  //return the newArray
};
