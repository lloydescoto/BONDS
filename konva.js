var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: document.getElementById("container"),
  width: width,
  height: height
});

var layer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
stage.add(buttonLayer, layer);

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
hydrogenButton.on('mouseenter', function() {
	this.fill('red');
	buttonLayer.draw();
});
hydrogenButton.on('mouseleave', function() {
	this.fill('green');
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