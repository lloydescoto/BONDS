var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: document.getElementById("container"),
  width: width,
  height: height
});

var layer = new Konva.Layer();
stage.add(layer);


stage.on('click', function (e) {
  var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
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
  layer.add(molecule).draw();
  layer.add(ringMolecule).draw();
  layer.add(atom).draw();
  anim.start();
});