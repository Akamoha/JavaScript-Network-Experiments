$(document).ready(function() {
	var paper = Raphael("container", "100%", "100%");

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
		
	NodeManager.prototype.connectNodes = function connectNodes(startX, startY, endX, endY)
	{   
			var line = paper.path( ["M", startX, startY, "L", endX, endY ] );
			line.attr("stroke-width", "0.1");
			line.attr("opacity", 0.1);
			line.translate(0.1, 0.1);
	}
	
	function randomIntFromInterval(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	var nodeMgr = new NodeManager(paper);

	var N = 7000;//43735;
	var E = 50000;//125462;
	
	var LY = 5;
	var LY1 = 10;
	var RY = 1.428169;
	
	var LX = 5;
	var LX1 = 10;
	var RX = 0.6584415;
	
	var mydata = JSON.parse(data);
	
	for(i = 0; i < N; i++) {
		var givenx = mydata[i].x;
		var giveny = mydata[i].y;
		var x = (givenx - LX)/RX + LX1;
		var y = (giveny - LY)/RY + LY1;
		nodeMgr.addNode("o", x, y);
	}
 
	var mydata = JSON.parse(data2);

	for(i = 0; i < E; i++) {
		var givenStartX = mydata[i].sx;
		var givenStartY = mydata[i].sy;
		var startX = (givenStartX - LX)/RX + LX1;
		var startY = (givenStartY - LY)/RY + LY1;
		
		var givenEndX = mydata[i].ex;
		var givenEndY = mydata[i].ey;
		var endX = (givenEndX - LX)/RX + LX1;
		var endY = (givenEndY - LY)/RY + LY1;
		
		nodeMgr.connectNodes(startX, startY, endX, endY);
	}
});