var Graph = function(){
  // create an instance in a pseudoclassical style using New keyword
  // initialize an array that contains all nodes
  this.nodes = [];
  // set up an array that contains all edges (an edge is an array with two nodes)
  this.edges = [];
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  // add newNode to the nodeset
  this.nodes.push(newNode);
  // in case there's only one node
  if ( toNode === undefined && this.size === 1 ) {
    toNode = this.nodes[0];
  }
  // if the second arg is passed in, add an array of the two args to the edges property of the graph
  if ( toNode ) {
  	this.addEdge(newNode, toNode);
  }
  this.size++;
};

Graph.prototype.contains = function(node){
  // check if the node passed in as arg is a member of the nodes property
  return (this.nodes.indexOf(node) !== -1) ? true : false;
};

Graph.prototype.removeNode = function(node){
  // remove the node passed in as arg from the nodes property
  var whereIsNode = this.nodes.indexOf(node);
  if (whereIsNode !== -1){
  	this.nodes.splice(whereIsNode, 1);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var targetEdge = Array.prototype.concat(fromNode, toNode);
  var reverseEdge = Array.prototype.concat(toNode, fromNode);
  var result = false;
  // debugger;
  for (var i = 0; i < this.edges.length; i++) {
    var edge = this.edges[i];
  	if ( JSON.stringify(edge) === JSON.stringify(targetEdge) || JSON.stringify(edge) === JSON.stringify(reverseEdge)) {
  		result = true;
  	}
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // concatenate with the two args the array
  var arr = Array.prototype.concat(fromNode, toNode);
  // push the edge to the edges array
  this.edges.push(arr);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // if there's an edge that matches the edge with the two args
  if ( this.getEdge(fromNode, toNode) ) {
  	var targetEdge = Array.prototype.concat(fromNode, toNode);
  	var reverseEdge = Array.prototype.concat(toNode, fromNode);
  	var index;
  	// find the index of the edge
  	for (var i = 0; i < this.edges.length; i++) {
      var edge = this.edges[i];
  	  if ( JSON.stringify(edge) === JSON.stringify(targetEdge) || JSON.stringify(edge) === JSON.stringify(reverseEdge)) {
  		index = i;
  	  }
    }
  	// remove the value from the edges property
  	this.edges.splice(index, 1);
  }
  if ( this.size === 2 && this.edges.length === 0 ) {
  	this.removeNode(fromNode);
  	this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
