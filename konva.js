var width = window.innerWidth;
var height = window.innerHeight;

function recognizeBonding(elements){
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

var elements = [
	{
		name: 'Hydrogen',
		atomic: 1,
		type: 'Nonmetal'
	},
	{
		name: 'Helium',
		atomic: 2,
		type: 'Nonmetal'
	},
	{
		name: 'Lithium',
		atomic: 3,
		type: 'Metal'
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

var layer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
stage.add(buttonLayer, layer);
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
	strokeWidth: 2
});

buttonLayer.add(hydrogenButton).draw();
buttonLayer.add(hydrogenText).draw();
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