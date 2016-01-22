var chai = require('chai');
var Graph = require('../graph.js');


describe('Graph', function() {
    var graph;
    beforeEach(function() {
        graph = new Graph();
    });
    describe('addVertex', function() {
        it('should add the vertex into graph', function() {
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            chai.expect(graph.graph).to.have.all.keys('A', 'B', 'C', 'D', 'E');
        });

        it('should not add a vertex twice', function() {
            graph.addVertex('A');
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('B');
            chai.expect(graph.graph).to.have.all.keys('A', 'B');
        });
    });
    describe('addEdge', function() {
        it('should create an edge between given vertices', function() {
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('A', 'D');
            graph.addEdge('A', 'E');

            chai.expect(graph.graph.A).to.deep.equal(['B', 'C', 'D', 'E']);
            chai.expect(graph.graph.B).to.deep.equal(['A']);
            chai.expect(graph.graph.C).to.deep.equal(['A']);
            chai.expect(graph.graph.D).to.deep.equal(['A']);
            chai.expect(graph.graph.E).to.deep.equal(['A']);
        });
        it('should throw an error when an vertex is given to form edge which is not in graph', function() {
            graph.addVertex('A');
            graph.addVertex('B');

            graph.addEdge('A', 'B');
            var exception = function() {
                graph.addEdge('A', 'D');
            };
            chai.expect(exception).to.throw(Error, /D is not a vertex/);

            exception = function() {
                graph.addEdge('D', 'B');
            };
            chai.expect(exception).to.throw(Error, /D is not a vertex/);

            chai.expect(graph.graph.A).to.deep.equal(['B']);
            chai.expect(graph.graph.B).to.deep.equal(['A']);
        });
    });
    describe('hasEdgeBetween', function() {
        it('should retur true if there is an edge between given vertices', function() {
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');

            chai.assert.ok(graph.hasEdgeBetween('A', 'B'));
            chai.assert.ok(graph.hasEdgeBetween('B', 'A'));
        });
        it('should retur false if there is no edge between given vertices', function() {
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');

            chai.assert.ok(!graph.hasEdgeBetween('B', 'C'));
        });
    });
});
