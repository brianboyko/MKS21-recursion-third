// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, output) {
  // your code here
  //get the node
  if (node === undefined){
    var node = document.body;
  }
  if (output === undefined){
    var output = [];
  }
  //test node for the given className
  if (node.classList.contains(className)) {
    output.push(node);
  }
  //if node has given class name then push on to new array
  for (var i = 0; i < node.childNodes.length; i++) {
    getElementsByClassName(className, node.childNodes[i], output);
  }
  return output;
  //check the children of document.body for the given className
  //if any of the children contain the className push it on to the new array
  //return the newArray
};
