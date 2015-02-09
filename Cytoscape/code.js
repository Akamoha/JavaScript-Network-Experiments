$(document).ready(function() {

var cy = cytoscape({
  container: document.getElementById('cy'),
 
  textureOnViewport: true,
  hideEdgesOnViewport: true,
  hideLabelsOnViewport: true,
  pixelRatio: 0.75,

  layout: {
    name: 'preset'
  },

  style: [
    {
      /*selector: 'node',
      css: {
        'content': 'data(id)'
      }*/

     selector: 'edge',
     css: {
	'curve-style': 'haystack'
     }
    }
  ]

});

var elementArray = [];

var N = 5000;
var E = 15000;

for (i = 0; i < N; i++) {
  var node = {
    group: "nodes",
    grabbable: false,
    locked: true,
    renderedPosition: { x: Math.floor((Math.random() * 4000) + 1)  , y: Math.floor((Math.random() * 2000) + 1)  }
  };

  elementArray.push(node);
}

for (i = 0; i < E; i++) {
  var sourceNum = Math.floor(Math.random() * N);
  var targetNum = Math.floor(Math.random() * N);
  var edge = {
    group: "edges",
    data: {
      source: "n"+sourceNum.toString(),
      target: "n"+targetNum.toString()
    }
  };

  elementArray.push(edge);
}

cy.add(elementArray);

});
