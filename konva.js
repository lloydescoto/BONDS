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
		return 'No Bonding';
	if(metalsCount > 0 && nonmetalsCount == 0)
		return 'No Bonding';
	if(metalsCount == 0 && nonmetalsCount > 0)
		return 'Covalent Bonding';
	if(metalsCount > 0 && nonmetalsCount > 0)
		return 'Ionic Bonding';
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
		else(i == 2)
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
	for(var i = 0;i <= shell.length; i++)
	{
		if(i == 0)
		{
			if(shell[i] == 0)
				return 'Stable';
			if(shell[i] != 2)
				return 'Unstable';
		}
		else
		{
			if(shell[i] == 0)
				return 'stable';
			if(shell[i] == 2)
				return 'stable';
			if(shell[i] != 8)
				return 'Unstable';
		}
	}
	return 'Stable';
}

function transferElectron(sourceElement, destinationElement)
{
	sourceElement.atomic = sourceElement.atomic - 1;
	destinationElement.atomic += 1;
	return sourceElement, destinationElement;
}

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

for (i in elements)
{
	console.log(elements[i].name);
}
console.log(elements[1].atomic);
var pickedElements = [];
pickedElements.push(elements[2]);
pickedElements.push(elements[0]);
console.log(recognizeBonding(pickedElements));

var stage = new Konva.Stage({
  container: document.getElementById("container"),
  width: width,
  height: height
});

console.log(distributeElectron(elements[0]));
console.log(checkShells(distributeElectron(elements[0])));
console.log('');
elements[0], elements[2] = transferElectron(elements[0],elements[2]);
console.log(distributeElectron(elements[2]));
console.log(checkShells(distributeElectron(elements[2])));
console.log(distributeElectron(elements[0]));
console.log(checkShells(distributeElectron(elements[0])));
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
      x: 100 + 13,
      y: 100 + 10,
      text: 'He',
      fontSize: 30,
      fontFamily: 'Arial',
      fill: 'white'
  });
var heliumButton = new Konva.Rect({
	x: 100,
	y: 100,
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
      fill: 'white'
  });
  var molecule = new Konva.Circle({
	x: position['x'],
	y: position['y'],
	fill: 'red',
	stroke: 'black',
	radius: 30
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
  var ringMolecule2 = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 50,
	outerRadius: 51,
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
		x: -100,
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
  group.add(ringMolecule2);
  group.add(atom);
  group.on('mouseover', function() {
	document.body.style.cursor = 'pointer';
  });
  group.on('mouseout', function() {
	document.body.style.cursor = 'default';
  });
  layer.add(group).draw();
  anim.start();
});

stage.on('click', function (e) {
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
      fill: 'white'
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
  var ringMolecule2 = new Konva.Ring({
	x: position['x'],
	y: position['y'],
	innerRadius: 50,
	outerRadius: 51,
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
		x: -100,
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
  group.add(ringMolecule2);
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
		tooltip.getText().setText("node: " + node.name() + ", color: " + node.fill());
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
