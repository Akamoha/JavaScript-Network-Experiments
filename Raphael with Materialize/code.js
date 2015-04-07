$(document).ready(function() {
	$(".button-collapse").sideNav({
		menuWidth: 300, // Default is 240
		edge: 'left', // Choose the horizontal origin
		closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor);
	});
	
	$('select').material_select();
	
	var container = $("#container");
	
	var paper = Raphael('container', container.width(), container.height());
	
	var panZoom = paper.panzoom({ initialZoom: 1, initialPosition: { x: 100, y: 0} });
    
    panZoom.enable();
    paper.safari();
	
	$("#container #up").click(function (e) {
        panZoom.zoomIn(1);
        e.preventDefault();
    });

    $("#container #down").click(function (e) {
        panZoom.zoomOut(1);
        e.preventDefault();
    });
	
	function NodeManager( paper, node_radius, node_style, label_style )
	{
		this.paper = paper;
		this.nodes = {};
		this.node_radius = node_radius || 2;
		this.node_style = node_style || { fill: 'white', stroke: 'black', 'stroke-width': 1.5 };
		this.label_style = label_style || { fill: 'black', stroke: 'none', 'font-family': 'Arial,Helvetica,sans-serif', 'font-size': 32, 'font-weight': 600 };
	}

	NodeManager.prototype.addNode = function addNode(code, x, y, node_radius, node_style)
	{
			var node = this.paper.circle( x, y, node_radius || this.node_radius ).attr( node_style || this.node_style );
			this.nodes[code] = 
				{
					x: x,
					y: y,
					r: node_radius || this.node_radius,
					node: node
				};
	}
		
	NodeManager.prototype.connectNodes = function connectNodes(startX, startY, endX, endY, alpha, r, g, b)
	{   
			var line = paper.path( ["M", startX, startY, "L", endX, endY ] );
			line.attr("stroke-width", "0.25");
			line.attr("opacity", 7*alpha);
			line.attr("stroke", Raphael.rgb(r*255,g*255,b*255));
			line.translate(0.1, 0.1);
	}
	
	function randomIntFromInterval(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	$("#normalRedraw").bind('click', function () { 
		alert('Normal Graph Redraw Clicked'); 
	});
	
	$("#bipartiteRedraw").bind('click', function () { 
		alert('Bipartite Graph Redraw Clicked'); 
	});
	
	$("#ascentricRedraw").bind('click', function () {
		alert('AS-Centric Graph Redraw Clicked'); 
	});
	
	var nodeMgr = new NodeManager(paper);

	var N = 1000//43735;
	var E = 2000;//125462;
	var XOFFSET = 300;
	var YOFFSET = 75;
		
	var LY = 5;
	var LY1 = 10;
	var RY = 1.428169;
	
	var LX = 5;
	var LX1 = 10;
	var RX = 0.6584415;
	
	var mydata = JSON.parse(data2);

	for(i = 0; i < E; i++) {
		var givenStartX = mydata[i].sx;
		var givenStartY = mydata[i].sy;
		
		//var startX = (givenStartX - LX)/RX + LX1;
		//var startY = (givenStartY - LY)/RY + LY1;
		
		//var startX = givenStartX / 2 + 300;
		//var startY = givenStartY / 2 + 100;
		
		var startX = givenStartX + XOFFSET;
		var startY = givenStartY + YOFFSET;
		
		var givenEndX = mydata[i].ex;
		var givenEndY = mydata[i].ey;
		
		//var endX = (givenEndX - LX)/RX + LX1;
		//var endY = (givenEndY - LY)/RY + LY1;
		
		//var endX = givenEndX / 2 + 300;
		//var endY = givenEndY / 2 + 100;
		
		var endX = givenEndX + XOFFSET;
		var endY = givenEndY + YOFFSET;
		
		var alpha = mydata[i].alpha;
		var r = mydata[i].r;
		var g = mydata[i].g;
		var b = mydata[i].b;
		
		nodeMgr.connectNodes(startX, startY, endX, endY, alpha, r, g, b);
	}
	
	var mydata = JSON.parse(data);
	
	for(i = 0; i < N; i++) {
		var givenx = mydata[i].x;
		var giveny = mydata[i].y;
		
		//var x = (givenx - LX)/RX + LX1;
		//var y = (giveny - LY)/RY + LY1;
		
		//var x = givenx / 2 + 300;
		//var y = giveny / 2 + 100;
		
		var x = givenx + XOFFSET;
		var y = giveny + YOFFSET;
		
		var radius = mydata[i].radius;
		var node_style = { fill: Raphael.rgb(mydata[i].r, mydata[i].g, mydata[i].b), stroke: 'black', 'stroke-width': 1 };
		
		nodeMgr.addNode("o", x, y, radius, node_style);
	}
});