var width = window.innerWidth;
var height = window.innerHeight;

function recognizeBonding(elements)
{
	var type;
	var metalsCount = 0;
	var nonmetalsCount = 0;
	for(i in elements)
	{
		if(elements[i].type == 'Nonmetal')
			nonmetalsCount++;
		if(elements[i].type == 'Metal')
			metalsCount++;
	}
	if(metalsCount == 0 && nonmetalsCount == 0)
		return 'No';
	if(metalsCount > 0 && nonmetalsCount == 0)
		return 'No';
	if(metalsCount == 0 && nonmetalsCount > 0)
		return 'Covalent';
	if(metalsCount > 0 && nonmetalsCount > 0)
		return 'Ionic';
}

function distributeElectron(element)
{
	var shells = [];
	var atomic = element.atomic;
	if(atomic == 0)
	{
		shells.push(0);
		return shells;
	}
	for(var i = 1;i <= 7;i++)
	{
		if(atomic == 0)
			break;
		if(i == 1)
		{
			if(atomic - 2 < 0)
			{
				shells.push(atomic);
				atomic = 0;
			}
			else
			{
				shells.push(2);
				atomic -= 2;
			}
		}
		else
		{
			if(atomic - 8 < 0)
			{
				shells.push(atomic);
				atomic = 0;
			}
			else
			{
				shells.push(8);
				atomic -= 8;
			}
		}
	}
	return shells;
}

function checkShells(shell)
{
	if(shell[shell.length - 1] != 0 && shell[shell.length - 1] != 2 && shell[shell.length - 1] != 8)
	{
		return 'Unstable';
	}
	else
		return 'Stable';
}

function transferElectron(sourceElement, destinationElement)
{
	sourceElement.atomic = sourceElement.atomic - 1;
	destinationElement.atomic += 1;
	return sourceElement, destinationElement;
}

function countStable(elements)
{
	var stableCount = 0;
	var unstableCount = 0;
	for(i in elements)
	{
		if(checkShells(distributeElectron(elements[i])) == 'Stable')
		{
			stableCount++;
		}
		else
		{
			unstableCount++;
		}
	}
	return stableCount;
}

function countUnstable(elements)
{
	var stableCount = 0;
	var unstableCount = 0;
	for(i in elements)
	{
		if(checkShells(distributeElectron(elements[i])) == 'Stable')
		{
			stableCount++;
		}
		else
		{
			unstableCount++;
		}
	}
	return unstableCount;
}

function ionicBonding(elements)
{
	var stableCount = countStable(elements);
	var unstableCount = countUnstable(elements);
	for(i in elements)
	{
		if(checkShells(distributeElectron(elements[i])) == 'Stable')
		{
			
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])));
		}
		else
		{
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])));
		}
	}
	console.log('');
	for(var i = 0;i < elements.length; i++)
	{
		while(countUnstable(elements) > 2)
		{		
			if(checkShells(distributeElectron(elements[i])) != 'Stable')
			{
				elements[i], elements[i+1] = transferElectron(elements[i], elements[i+1]);
			}
			else
			{
				break;
			}
		}
	}
	console.log('');
	for(i in elements)
	{
		if(checkShells(distributeElectron(elements[i])) == 'Stable')
		{
			console.log(elements[i].name + ' ' + distributeElectron(elements[i]));
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])));
		}
		else
		{
			console.log(elements[i].name + ' ' + distributeElectron(elements[i]));
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])));
		}
	}
}

function covalentBonding(elements)
{
	var stableCount = 0;
	var unstableCount = 0;
	for(i in elements)
	{
		if(checkShells(distributeElectron(elements[i])) == 'Stable')
		{
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])))
			stableCount++;
		}
		else
		{
			console.log(elements[i].name + ' ' + checkShells(distributeElectron(elements[i])))
			unstableCount++;
		}
	}
}

var elementShell = {
	1: [1],
	2: [2],
	3: [2, 1],
	4: [2, 2],
	5: [2, 3],
	6: [2, 4],
	7: [2, 5],
	8: [2, 6],
	9: [2, 7],
	10: [2, 8],
	11: [2, 8, 1],
	12: [2, 8, 2],
	13: [2, 8, 3],
	14: [2, 8, 4],
	15: [2, 8, 5],
	16: [2, 8, 6],
	17: [2, 8, 7],
	18: [2, 8, 8],
	19: [2, 8, 8, 1],
	20: [2, 8, 8, 2],
	21: [2, 8, 9, 2],
	22: [2, 8, 10,2],
	23: [2, 8, 11, 2],
	24: [2, 8, 13, 1],
	25: [2, 8, 13, 2],
	26: [2, 8, 14, 2],
	27: [2, 8, 15, 2],
	28: [2, 8, 16, 2],
	29: [2, 8, 18, 1],
	30: [2, 8, 18, 2],
	31: [2, 8, 18, 3],
	32: [2, 8, 18, 4],
	33: [2, 8, 18, 5],
	34: [2, 8, 18, 6],
	35: [2, 8, 18, 7],
	36: [2, 8, 18, 8],
	37: [2, 8, 18, 8, 1],
	38: [2, 8, 18, 8, 2],
	39: [2, 8, 18, 9, 2],
	40: [2, 8, 18, 10, 2],
	41: [2, 8, 18, 12, 1],
	42: [2, 8, 18, 13, 1],
	43: [2, 8, 18, 13, 2],
	44: [2, 8, 18, 15, 1],
	45: [2, 8, 18, 16, 1],
	46: [2, 8, 18, 18, 0],
	47: [2, 8, 18, 18, 1],
	48: [2, 8, 18, 18, 2],
	49: [2, 8, 18, 18, 3],
	50: [2, 8, 18, 18, 4],
	51: [2, 8, 18, 18, 5],
	52: [2, 8, 18, 18, 6],
	53: [2, 8, 18, 18, 7],
	54: [2, 8, 18, 18, 8],
	55: [2, 8, 18, 18, 8, 1],
	56: [2, 8, 18, 18, 8, 2],
	57: [2, 8, 18, 18, 9, 2],
	58: [2, 8, 18, 19, 9, 2],
	59: [2, 8, 18, 21, 8, 2],
	60: [2, 8, 18, 22, 8, 2],
	61: [2, 8, 18, 23, 8, 2],
	62: [2, 8, 18, 24, 8, 2],
	63: [2, 8, 18, 25, 8, 2],
	64: [2, 8, 18, 25, 9, 2],
	65: [2, 8, 18, 27, 8, 2],
	66: [2, 8, 18, 28, 8, 2],
	67: [2, 8, 18, 29, 8, 2],
	68: [2, 8, 18, 30, 8, 2],
	69: [2, 8, 18, 31, 8, 2],
	70: [2, 8, 18, 32, 8, 2],
	71: [2, 8, 18, 32, 9, 2],
	72: [2, 8, 18, 32, 10, 2],
	73: [2, 8, 18, 32, 11, 2],
	74: [2, 8, 18, 32, 12, 2],
	75: [2, 8, 18, 32, 13, 2],
	76: [2, 8, 18, 32, 14, 2],
	77: [2, 8, 18, 32, 15, 2],
	78: [2, 8, 18, 32, 17, 1],
	79: [2, 8, 18, 32, 18, 1],
	80: [2, 8, 18, 32, 18, 2],
	81: [2, 8, 18, 32, 18, 3],
	82: [2, 8, 18, 32, 18, 4],
	83: [2, 8, 18, 32, 18, 5],
	84: [2, 8, 18, 32, 18, 6],
	85: [2, 8, 18, 32, 18, 7],
	86: [2, 8, 18, 32, 18, 8],
	87: [2, 8, 18, 32, 18, 8, 1],
	88: [2, 8, 18, 32, 18, 8, 2],
	89: [2, 8, 18, 32, 18, 9, 2],
	90: [2, 8, 18, 32, 18, 10, 2],
	91: [2, 8, 18, 32, 20, 9, 2],
	92: [2, 8, 18, 32, 21, 9, 2],
	93: [2, 8, 18, 32, 22, 9, 2],
	94: [2, 8, 18, 32, 24, 8, 2],
	95: [2, 8, 18, 32, 25, 8, 2],
	96: [2, 8, 18, 32, 25, 9, 2],
	97: [2, 8, 18, 32, 27, 8, 2],
	98: [2, 8, 18, 32, 28, 8, 2],
	99: [2, 8, 18, 32, 29, 8, 2],
	100: [2, 8, 18, 32, 30, 8, 2],
	101: [2, 8, 18, 32, 31, 8, 2],
	102: [2, 8, 18, 32, 32, 8, 2],
	103: [2, 8, 18, 32, 32, 8, 3],
	104: [2, 8, 18, 32, 32, 10, 2],
	105: [2, 8, 18, 32, 32, 11, 2],
	106: [2, 8, 18, 32, 32, 12, 2],
	107: [2, 8, 18, 32, 32, 13, 2],
	108: [2, 8, 18, 32, 32, 14, 2],
	109: [2, 8, 18, 32, 32, 15, 2],
	110: [2, 8, 18, 32, 32, 16, 2],
	111: [2, 8, 18, 32, 32, 17, 2],
	112: [2, 8, 18, 32, 32, 18, 2],
	113: [2, 8, 18, 32, 32, 18, 3],
	114: [2, 8, 18, 32, 32, 18, 4],
	115: [2, 8, 18, 32, 32, 18, 5],
	116: [2, 8, 18, 32, 32, 18, 6],
	117: [2, 8, 18, 32, 32, 18, 7],
	118: [2, 8, 18, 32, 32, 18, 8],
};

var elements = [
	{
		name: 'Hydrogen',
		atomic: 1,
		type: 'Nonmetal',
		shell: 1
	},
	{
		name: 'Helium',
		atomic: 2,
		type: 'Nonmetal',
		shell: 1
	},
	{
		name: 'Lithium',
		atomic: 3,
		type: 'Metal',
		shell: 2
	},
	{
		name: 'Beryllium',
		atomic: 4,
		type: 'Metal',
		shell: 2
	},
	{
		name: 'Sodium',
		atomic: 11,
		type: 'Metal',
		shell: 3
	},
	{
		name: 'Carbon',
		atomic: 6,
		type: 'Nonmetal',
		shell: 2
	},
	{
		name: 'Nitrogen',
		atomic: 7,
		type: 'Nonmetal',
		shell: 2
	},
	{
		name: 'Oxygen',
		atomic: 8,
		type: 'Nonmetal',
		shell: 2
	},
	{
		name: 'Flourine',
		atomic: 9,
		type: 'Nonmetal',
		shell: 2
	},
	{
		name: 'Neon',
		atomic: 10,
		type: 'Nonmetal',
		shell: 2
	}
]

var stage = new Konva.Stage({
  container: document.getElementById("container"),
  width: width,
  height: height
});

var layer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
var tooltipLayer = new Konva.Layer();
stage.add(buttonLayer, layer, tooltipLayer);
var tooltip = new Konva.Label({
        opacity: 0.75,
        visible: false,
        listening: false
});

tooltip.add(new Konva.Tag({
	fill: 'black',
	pointerDirection: 'down',
	pointerWidth: 10,
	pointerHeight: 10,
	lineJoin: 'round',
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: 10,
	shadowOpacity: 0.2
}));

tooltip.add(new Konva.Text({
	text: '',
	fontFamily: 'Calibri',
	fontSize: 18,
	padding: 5,
	fill: 'white'
}));

tooltipLayer.add(tooltip);

var simulateText = new Konva.Text({
	x: 200 + 10,
    y: 200 + 10,
    text: 'Simulate',
    fontSize: 30,
    fontFamily: 'Arial',
    fill: 'white'
});

var simulateButton = new Konva.Rect({
	x: 200,
	y: 200,
	width: 140,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});


var hydrogenText = new Konva.Text({
      x: 50 + 13,
      y: 50 + 10,
      text: 'H',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var hydrogenButton = new Konva.Rect({
	x: 50,
	y: 50,
	width: 50,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
var heliumText = new Konva.Text({
      x: 105 + 6,
      y: 50 + 10,
      text: 'He',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var heliumButton = new Konva.Rect({
	x: 105,
	y: 50,
	width: 50,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
var lithiumText = new Konva.Text({
      x: 160 + 12,
      y: 50 + 10,
      text: 'Li',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var lithiumButton = new Konva.Rect({
	x: 160,
	y: 50,
	width: 50,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
var berylliumText = new Konva.Text({
      x: 50 + 6,
      y: 105 + 10,
      text: 'Be',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var berylliumButton = new Konva.Rect({
	x: 50,
	y: 105,
	width: 50,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
var sodiumText = new Konva.Text({
      x: 105 + 6,
      y: 105 + 10,
      text: 'Na',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var sodiumButton = new Konva.Rect({
	x: 105,
	y: 105,
	width: 50,
	height: 50,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});

buttonLayer.add(hydrogenButton).draw();
buttonLayer.add(hydrogenText).draw();
buttonLayer.add(heliumButton).draw();
buttonLayer.add(heliumText).draw();
buttonLayer.add(lithiumButton).draw();
buttonLayer.add(lithiumText).draw();
buttonLayer.add(berylliumButton).draw();
buttonLayer.add(berylliumText).draw();
buttonLayer.add(sodiumButton).draw();
buttonLayer.add(sodiumText).draw();
buttonLayer.add(simulateButton).draw();
buttonLayer.add(simulateText).draw();
hydrogenButton.on('mouseenter', function() {
	this.fill('red');
	hydrogenText.fill('black');
	buttonLayer.draw();
});
hydrogenButton.on('mouseleave', function() {
	this.fill('green');
	hydrogenText.fill('white');
	buttonLayer.draw();
});
hydrogenText.on('mouseenter', function() {
	hydrogenButton.fill('red');
	hydrogenText.fill('black');
	buttonLayer.draw();
});
hydrogenText.on('mouseleave', function() {
	hydrogenButton.fill('green');
	hydrogenText.fill('white');
	buttonLayer.draw();
});

heliumButton.on('mouseenter', function() {
	this.fill('red');
	heliumText.fill('black');
	buttonLayer.draw();
});
heliumButton.on('mouseleave', function() {
	this.fill('green');
	heliumText.fill('white');
	buttonLayer.draw();
});
heliumText.on('mouseenter', function() {
	heliumButton.fill('red');
	heliumText.fill('black');
	buttonLayer.draw();
});
heliumText.on('mouseleave', function() {
	heliumButton.fill('green');
	heliumText.fill('white');
	buttonLayer.draw();
});

lithiumButton.on('mouseenter', function() {
	this.fill('red');
	lithiumText.fill('black');
	buttonLayer.draw();
});
lithiumButton.on('mouseleave', function() {
	this.fill('green');
	lithiumText.fill('white');
	buttonLayer.draw();
});
lithiumText.on('mouseenter', function() {
	lithiumButton.fill('red');
	lithiumText.fill('black');
	buttonLayer.draw();
});
lithiumText.on('mouseleave', function() {
	lithiumButton.fill('green');
	lithiumText.fill('white');
	buttonLayer.draw();
});

berylliumButton.on('mouseenter', function() {
	this.fill('red');
	berylliumText.fill('black');
	buttonLayer.draw();
});
berylliumButton.on('mouseleave', function() {
	this.fill('green');
	berylliumText.fill('white');
	buttonLayer.draw();
});
berylliumText.on('mouseenter', function() {
	berylliumButton.fill('red');
	berylliumText.fill('black');
	buttonLayer.draw();
});
berylliumText.on('mouseleave', function() {
	berylliumButton.fill('green');
	berylliumText.fill('white');
	buttonLayer.draw();
});

sodiumButton.on('mouseenter', function() {
	this.fill('red');
	sodiumText.fill('black');
	buttonLayer.draw();
});
sodiumButton.on('mouseleave', function() {
	this.fill('green');
	sodiumText.fill('white');
	buttonLayer.draw();
});
sodiumText.on('mouseenter', function() {
	sodiumButton.fill('red');
	sodiumText.fill('black');
	buttonLayer.draw();
});
sodiumText.on('mouseleave', function() {
	sodiumButton.fill('green');
	sodiumText.fill('white');
	buttonLayer.draw();
});
function stopMove()
{
	move.stop();
}

function haveIntersection(r1, r2) {
	return !(
		r2.x > r1.x + r1.width ||
		r2.x + r2.width < r1.x ||
		r2.y > r1.y + r1.height ||
		r2.y + r2.height < r1.y
	);
}
var move = new Konva.Animation(function(frame){
	var shape = layer.getChildren()[(layer.getChildren().length) - 1];
	var shapeChild = shape.getChildren()[(shape.getChildren().length) - 1];
	if(shape.getX() < simulateButton.getX())
	{
		shape.setX(shape.getX() + 1);
	} else
	{
		shape.setX(shape.getX() - 1);
	}
	if(shape.getY() < simulateButton.getY())
	{
		shape.setY(shape.getY() + 1);
	} else
	{
		shape.setY(shape.getY() - 1);
	}
}, layer);
simulateButton.on('click', function(){
	ionicBonding(elements);
	move.start();
});

simulateText.on('click', function(){
	ionicBonding(elements);
});

//Hydrogen
hydrogenButton.on('click', function() {
  var group = new Konva.Group({
	draggable: true 
  });
  var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
  var simpleText = new Konva.Text({
      x: position['x'] - 11,
      y: position['y'] - 15,
      text: 'H',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white',
	  name: 'Hydrogen'
  });
  var molecule = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 30,
	name: 'Hydrogen'
  });
  var ringMolecule = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 40,
	outerRadius: 41,
	fill: 'yellow',
	stroke: 'black',
	strokeWidth: 1
  });
  var atom = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 5,
	offset: {
		x: -40,
		y: 0
	}
  });
  var angularSpeed = 90;
  var anim = new Konva.Animation(function(frame) {
	  var angleDiff = frame.timeDiff * angularSpeed / 1000;
	  atom.rotate(angleDiff);
  }, layer);
  group.add(molecule);
  group.add(simpleText);
  group.add(ringMolecule);
  group.add(atom);
  group.on('mouseover', function(e) {
	document.body.style.cursor = 'pointer';
	var node = e.target;
	  if (node) {
		// update tooltip
		var mousePos = node.getStage().getPointerPosition();
		tooltip.position({
			x : mousePos.x,
			y : mousePos.y - 5
		});
		tooltip.getText().setText("Name: " + node.name() + ", Atomic: " + 1);
		tooltip.show();
		tooltipLayer.batchDraw();
	  }
	  });
  group.on('mouseout', function() {
	document.body.style.cursor = 'default';
	tooltip.hide();
	tooltipLayer.draw();
  });
  layer.add(group).draw();
  anim.start();
});

hydrogenText.on('click', function() {
  var group = new Konva.Group({
	draggable: true 
  });
  var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
  var simpleText = new Konva.Text({
      x: position['x'] - 11,
      y: position['y'] - 15,
      text: 'H',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white',
	  name: 'Hydrogen'
  });
  var molecule = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 30,
	name: 'Hydrogen'
  });
  var ringMolecule = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 40,
	outerRadius: 41,
	fill: 'yellow',
	stroke: 'black',
	strokeWidth: 1
  });
  var atom = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 5,
	offset: {
		x: -40,
		y: 0
	}
  });
  var angularSpeed = 90;
  var anim = new Konva.Animation(function(frame) {
	  var angleDiff = frame.timeDiff * angularSpeed / 1000;
	  atom.rotate(angleDiff);
  }, layer);
  group.add(molecule);
  group.add(simpleText);
  group.add(ringMolecule);
  group.add(atom);
  group.on('mouseover', function(e) {
	document.body.style.cursor = 'pointer';
	var node = e.target;
	  if (node) {
		// update tooltip
		var mousePos = node.getStage().getPointerPosition();
		tooltip.position({
			x : mousePos.x,
			y : mousePos.y - 5
		});
		tooltip.getText().setText("Name: " + node.name() + ", Atomic: " + 1);
		tooltip.show();
		tooltipLayer.batchDraw();
	  }
	  });
  group.on('mouseout', function() {
	document.body.style.cursor = 'default';
	tooltip.hide();
	tooltipLayer.draw();
  });
  layer.add(group).draw();
  anim.start();
});
//Helium
heliumButton.on('click', function() {
  var group = new Konva.Group({
	draggable: true 
  });
  var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
  var simpleText = new Konva.Text({
      x: position['x'] - 18,
      y: position['y'] - 15,
      text: 'He',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white',
	  name: 'Helium'
  });
  var molecule = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 30,
	name: 'Helium'
  });
  var ringMolecule = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 40,
	outerRadius: 41,
	fill: 'yellow',
	stroke: 'black',
	strokeWidth: 1
  });
  group.add(molecule);
  group.add(simpleText);
  group.add(ringMolecule);
  for(var i = 0; i < 11; i++)
  {
	  var atom = new Konva.Circle({
		x: position['x'],
		y: position['y'],
		fill: 'red',
		stroke: 'black',
		radius: 5,
		offset: {
			x: -40,
			y: 0
		},
		name: 'atom'
	  });
	  atom.rotate(40 * i);
	  group.add(atom);
  }
  angularSpeed = 90;
  var anim = new Konva.Animation(function(frame) {
	  var angleDiff = frame.timeDiff * angularSpeed / 1000;
	  group.find('Circle').rotate(angleDiff);
	  
  }, layer);
  group.on('mouseover', function(e) {
	document.body.style.cursor = 'pointer';
	var node = e.target;
	  if (node) {
		// update tooltip
		var mousePos = node.getStage().getPointerPosition();
		tooltip.position({
			x : mousePos.x,
			y : mousePos.y - 5
		});
		tooltip.getText().setText("Name: " + node.name() + ", Atomic: " + 2);
		tooltip.show();
		tooltipLayer.batchDraw();
	  }
	  });
  group.on('mouseout', function() {
	document.body.style.cursor = 'default';
	tooltip.hide();
	tooltipLayer.draw();
  });
  layer.add(group).draw();
  anim.start();
});

heliumText.on('click', function() {
  var group = new Konva.Group({
	draggable: true 
  });
  var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
  var simpleText = new Konva.Text({
      x: position['x'] - 18,
      y: position['y'] - 15,
      text: 'He',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white',
	  name: 'Helium'
  });
  var molecule = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 30,
	name: 'Helium'
  });
  var ringMolecule = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 40,
	outerRadius: 41,
	fill: 'yellow',
	stroke: 'black',
	strokeWidth: 1
  });
  var atom = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 5,
	offset: {
		x: -40,
		y: 0
	}
  });
  var atom1 = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 5,
	offset: {
		x: 40,
		y: 0
	}
  });
  var angularSpeed = 90;
  var anim = new Konva.Animation(function(frame) {
	  var angleDiff = frame.timeDiff * angularSpeed / 1000;
	  atom.rotate(angleDiff);
	  atom1.rotate(angleDiff);
  }, layer);
  group.add(molecule);
  group.add(simpleText);
  group.add(ringMolecule);
  group.add(atom);
  group.add(atom1);
  group.on('mouseover', function(e) {
	document.body.style.cursor = 'pointer';
	var node = e.target;
	  if (node) {
		// update tooltip
		var mousePos = node.getStage().getPointerPosition();
		tooltip.position({
			x : mousePos.x,
			y : mousePos.y - 5
		});
		tooltip.getText().setText("Name: " + node.name() + ", Atomic: " + 2);
		tooltip.show();
		tooltipLayer.batchDraw();
	  }
	  });
  group.on('mouseout', function() {
	document.body.style.cursor = 'default';
	tooltip.hide();
	tooltipLayer.draw();
  });
  layer.add(group).draw();
  anim.start();
});
