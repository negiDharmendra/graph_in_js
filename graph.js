var Graph = function(){
	this.graph = {};
}

Graph.prototype = {
	addVertex:function(vertex){
		this.graph[vertex] = this.graph[vertex]||[];
	},
	addEdge:function(from,to){
		if(!this.graph[from])
			throw new Error(from+' is not a vertex');
		if(!this.graph[to])
			throw new Error(to+' is not a vertex');
		this.graph[from].push(to);
		this.graph[to].push(from);
	},
	hasEdgeBetween:function(from,to){
		return this.graph[from].indexOf(to)>=0;
	}
};


module.exports = Graph