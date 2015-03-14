$(document).ready(function() {
	var paper = Raphael("container", "100%", "100%");

	function NodeManager( paper, node_radius, node_style, label_style )
	{
		this.paper = paper;
		this.nodes = {};
		this.node_radius = node_radius || 1;
		this.node_style = node_style || { fill: 'white', stroke: 'black', 'stroke-width': 2 };
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
		
	NodeManager.prototype.connectNodes = function connectNodes(code1, code2)
	{   
			var angle = Math.atan2(this.nodes[code2].y - this.nodes[code1].y, this.nodes[code2].x - this.nodes[code1].x );      //  this will be the angle from point to point
			var inverse_angle = angle + Math.PI;

			ox1 = this.nodes[code1].x + Math.cos( angle ) * this.nodes[code1].r;
			oy1 = this.nodes[code1].y + Math.sin( angle ) * this.nodes[code1].r;

			ox2 = this.nodes[code2].x + Math.cos( inverse_angle ) * this.nodes[code2].r;
			oy2 = this.nodes[code2].y + Math.sin( inverse_angle ) * this.nodes[code2].r;

			var pathstr = "M" + ox1 + "," + oy1 + " L" + ox2 + "," + oy2;
	 
			var path = this.paper.path(pathstr).attr(this.node_style );
	}
	
	function randomIntFromInterval(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
		
	var allText = "";
	function readTextFile(file)
	{
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					allText = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);
	}	
	
	readTextFile("file:///C:/Users/Akshay%20Damle/Desktop/Raphael/text.txt");
	var lineArr = allText.split('\n');
	
	var nodeMgr = new NodeManager(paper);
	//nodeMgr.connectNodes( 'origin', '1' );

	var N = 7000;
	var E = 150;
	
	var LY = 5;
	var LY1 = 10;
	var RY = 1.428169;
	
	var LX = 5;
	var LX1 = 10;
	var RX = 0.6584415;

	var givenx = 141.856344466;
	var giveny = 223.879556962;
	
	for(i = 0; i < N; i++) {
		var line = lineArr[i].split(' ');
		var givenx = parseFloat(line[0]);
		var giveny = parseFloat(line[1]);
		var x = (givenx - LX)/RX + LX1;
		var y = (giveny - LY)/RY + LY1;
		nodeMgr.addNode("o", x, y);
	}

	/*for(i = 0; i < E; i++) {
	  var sourceNum = Math.floor(Math.random() * N);
	  var targetNum = Math.floor(Math.random() * N);
	  var edge = {
		group: "edges",
		data: {
		  source: "n"+sourceNum.toString(),
		  target: "n"+targetNum.toString()
		}
	  };
	}*/
});
