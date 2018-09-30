var width = window.innerWidth;
var height = 1400;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height
});

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

var elementType = {
	1: 'NM',
	2: 'NM',
	3: 'M',
	4: 'M',
	5: 'M',
	6: 'NM',
	7: 'NM',
	8: 'NM',
	9: 'NM',
	10: 'NM',
	11: 'M',
	12: 'M',
	13: 'M',
	14: 'M',
	15: 'NM',
	16: 'NM',
	17: 'NM',
	18: 'NM',
	19: 'M',
	20: 'M',
	21: 'M',
	22: 'M',
	23: 'M',
	24: 'M',
	25: 'M',
	26: 'M',
	27: 'M',
	28: 'M',
	29: 'M',
	30: 'M',
	31: 'M',
	32: 'M',
	33: 'M',
	34: 'NM',
	35: 'NM',
	36: 'NM',
	37: 'M',
	38: 'M',
	39: 'M',
	40: 'M',
	41: 'M',
	42: 'M',
	43: 'M',
	44: 'M',
	45: 'M',
	46: 'M',
	47: 'M',
	48: 'M',
	49: 'M',
	50: 'M',
	51: 'M',
	52: 'M',
	53: 'NM',
	54: 'NM',
	55: 'M',
	56: 'M',
	57: 'M',
	58: 'M',
	59: 'M',
	60: 'M',
	61: 'M',
	62: 'M',
	63: 'M',
	64: 'M',
	65: 'M',
	66: 'M',
	67: 'M',
	68: 'M',
	69: 'M',
	70: 'M',
	71: 'M',
	72: 'M',
	73: 'M',
	74: 'M',
	75: 'M',
	76: 'M',
	77: 'M',
	78: 'M',
	79: 'M',
	80: 'M',
	81: 'M',
	82: 'M',
	83: 'M',
	84: 'M',
	85: 'NM',
	86: 'M',
	87: 'M',
	88: 'M',
	89: 'M',
	90: 'M',
	91: 'M',
	92: 'M',
	93: 'M',
	94: 'M',
	95: 'M',
	96: 'M',
	97: 'M',
	98: 'M',
	99: 'M',
	100: 'M',
	101: 'M',
	102: 'M',
	103: 'M',
	104: 'M',
	105: 'M',
	106: 'M',
	107: 'M',
	108: 'M',
	109: 'M',
	110: 'M',
	111: 'M',
	112: 'M',
	113: 'M',
	114: 'M',
	115: 'M',
	116: 'M',
	117: 'NM',
	118: 'NM',
};

var elementSymbol = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y',
 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr',
  'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au',
   'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es',
	'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Uub', 'Uut', 'Uuq', 'Uup', 'Uuh', 'Uus', 'Uuo',];
	
var colors = ['red', 'orange', 'cyan', 'green', 'blue', 'purple'];

function numberShells(atomic)
{
	if(atomic < 3)
		return 1;
	else if(atomic < 11)
		return 2;
	else if(atomic < 19)
		return 3
	else if(atomic < 37)
		return 4;
	else if(atomic < 55)
		return 5;
	else if(atomic < 87)
		return 6;
	else
		return 7;
}

function checkEntry(first,second)
{
	if(first == -1 || second == -1)
		return true;
	else
		return false;
}

function whereEntry(first,second)
{	
	if(first == -1)
		return 1;
	if(second == -1)
		return 2;
	return 3;
}

function recognizeBond(first,second)
{
	if(first == 'NM' && second == 'NM')
		return 'CB'
	if(first == 'NM' && second == 'M')
		return 'IB'
	if(first == 'M' && second == 'NM')
		return 'IB'
	if(first == 'M' && second == 'M')
		return 'MB'
}

function covalentChecking(firstLastShell, secondLastShell)
{
	if(firstLastShell + secondLastShell == 2)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 8)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 18)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 32)
		return 'Stable';
	else
		return 'Unstable';
	
}

function ionicChecking(firstLastShell, secondLastShell)
{
	if(firstLastShell + secondLastShell == 2)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 8)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 18)
		return 'Stable';
	else if(firstLastShell + secondLastShell == 32)
		return 'Stable';
	else
		return 'Unstable';
}

var backgroundLayer = new Konva.Layer();
var layer = new Konva.Layer();
var elementLayer = new Konva.Layer();
var statusLayer = new Konva.Layer();
var simulateLayer = new Konva.Layer();
var simulateButton = new Konva.Rect({
	x: 10,
	y: 0,
	width: 310,
	height: 50,
	fill: 'black',
	stroke: 'white',
	strokeWidth: 2,
	cornerRadius: 5
});
var simulateText = new Konva.Text({
	x: 110,
	y: 10,
	text: 'Simulate',
	fontSize: 30,
	fontFamily: 'Arial',
	fill: 'white'
});
simulateLayer.add(simulateButton).draw();
simulateLayer.add(simulateText).draw();
var row = 10;
var column = 0;
var count = 0;
var space = 50;
for(var i = 0;i < 118; i++)
{
	if(i % 5 == 0)
	{
		space = 0;
		count = 0
		column += 55;
	}
	var rect = new Konva.Rect({
		x: row * (count + 1) + space,
		y: column,
		width: 50,
		height: 50,
		fill: colors[Math.round(Math.random() * 5)],
		stroke: 'black',
		strokeWidth: 2,
		cornerRadius: 5,
		id: i+1
	});
	if(elementSymbol[i].length == 1)
	{
		var buttonText = new Konva.Text({
			x: row * (count + 1) + space + 15,
			y: column + 12,
			text: elementSymbol[i],
			fontSize: 27,
			fontFamily: 'Arial',
			fill: 'white',
			id: i+1
		});
	}
	if(elementSymbol[i].length == 2)
	{
		var buttonText = new Konva.Text({
			x: row * (count + 1) + space + 7,
			y: column + 12,
			text: elementSymbol[i],
			fontSize: 27,
			fontFamily: 'Arial',
			fill: 'white',
			id: i+1
		});
	}
	if(elementSymbol[i].length == 3)
	{
		var buttonText = new Konva.Text({
			x: row * (count + 1) + space,
			y: column + 12,
			text: elementSymbol[i],
			fontSize: 27,
			fontFamily: 'Arial',
			fill: 'white',
			id: i+1
		});
	}
	space += 50 + 5
	count += 1;
	layer.add(rect).draw();
	layer.add(buttonText).draw();
}
var pickedElements = {
	'first': -1,
	'second': -1
};

var pickedGroup = {
	'first': 0,
	'second': 0
};

var groupCount = 1;
layer.on('click', function(evt) {
	var shape = evt.target;
	if(shape)
	{
		if(checkEntry(pickedElements['first'],pickedElements['second']))
		{
			if(pickedElements['first'] == -1)
			{
				pickedElements['first'] = shape.getId() - 1;
				pickedGroup['first'] = groupCount - 1;
				var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
				var group = new Konva.Group({
				  draggable: true 
				});
				var molecule = new Konva.Circle({
					x: 450,
					y: 100,
					fill: shape.getFill(),
					stroke: 'black',
					radius: 30,
					group: groupCount,
					atomic: shape.getId(),
					place: 'first'
				});
				group.add(molecule);
				var ringRange = 40;
				for(var i = 0;i < numberShells(shape.getId());i++)
				{
					var ringMolecule = new Konva.Ring({
						x: 450,
						y: 100,
						innerRadius: ringRange,
						outerRadius: ringRange+1,
						fill: 'yellow',
						stroke: 'black',
						strokeWidth: 1,
						group: groupCount,
						atomic: shape.getId(),
						place: 'first'
					});	
					group.add(ringMolecule);
					for(var x = 0;x < elementShell[shape.getId()][i];x++)
					{
						var atom = new Konva.Circle({
							x: 450,
							y: 100,
							fill: shape.getFill(),
							stroke: 'black',
							radius: 5,
							group: groupCount,
							offset: {
								x: -ringRange,
								y: 0
							}
						});
						if(i == 0)
						{
							atom.rotate(180 * x);
						}
						if(i == 1)
						{
							atom.rotate(45 * x);
						}
						if(i == 2)
						{
							atom.rotate(20 * x);
						}
						if(i == 3 || i == 4)
						{
							atom.rotate(11 * x);
						}
						if(i == 5)
						{
							atom.rotate(20 * x);
						}
						if(i == 6)
						{
							atom.rotate(45 * x);
						}
						group.add(atom);
					}
					ringRange += 10;
					
				}
				elementLayer.add(group).draw();
				angularSpeed = 90;
				var anim = new Konva.Animation(function(frame) {
				   var angleDiff = frame.timeDiff * angularSpeed / 1000;
				   group.find('Circle').rotate(angleDiff);
				  
				}, elementLayer);
				anim.start();
				groupCount += 1;
				
				var statusGroup = new Konva.Group();
				var statusBox = new Konva.Rect({
					x: width - 180,
					y: height - 30,
					width: 150,
					height: 30,
					fill: 'black',
					stroke: 'black',
					strokeWidth: 2,
					cornerRadius: 5
				});
				statusGroup.add(statusBox);
				var statusText = new Konva.Text({
					x: width - 160,
					y: height - 20,
					text: elementSymbol[shape.getId()-1] + ' is added',
					fontSize: 15,
					fontFamily: 'Arial',
					fill: 'white'
				});
				statusGroup.add(statusText);
				var statusAnim = new Konva.Animation(function(frame) {
					statusGroup.setY(statusGroup.getY() - 5);
					if(statusGroup.getY() < -1300)
						statusGroup.visible(false);
				}, statusLayer);
				statusLayer.add(statusGroup).draw();
				statusAnim.start();
			}
			else
			{
				pickedElements['second'] = shape.getId() - 1;
				pickedGroup['second'] = groupCount - 1;
				var group = new Konva.Group({
				  draggable: true 
				});
				var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
				var molecule = new Konva.Circle({
					x: 900,
					y: 100,
					fill: shape.getFill(),
					stroke: 'black',
					radius: 30,
					group: groupCount,
					atomic: shape.getId(),
					place: 'second'
				});
				group.add(molecule);
				var ringRange = 40;
				for(var i = 0;i < numberShells(shape.getId());i++)
				{
					var ringMolecule = new Konva.Ring({
						x: 900,
						y: 100,
						innerRadius: ringRange,
						outerRadius: ringRange+1,
						fill: 'yellow',
						stroke: 'black',
						strokeWidth: 1,
						group: groupCount,
						atomic: shape.getId(),
						place: 'second'
					});	
					group.add(ringMolecule);
					for(var x = 0;x < elementShell[shape.getId()][i];x++)
					{
						var atom = new Konva.Circle({
							x: 900,
							y: 100,
							fill: shape.getFill(),
							stroke: 'black',
							radius: 5,
							group: groupCount,
							offset: {
								x: -ringRange,
								y: 0
							}
						});
						if(i == 0)
						{
							atom.rotate(180 * x);
						}
						if(i == 1)
						{
							atom.rotate(45 * x);
						}
						if(i == 2)
						{
							atom.rotate(20 * x);
						}
						if(i == 3 || i == 4)
						{
							atom.rotate(11 * x);
						}
						if(i == 5)
						{
							atom.rotate(20 * x);
						}
						if(i == 6)
						{
							atom.rotate(45 * x);
						}
						group.add(atom);
					}
					ringRange += 10;
					
				}
				elementLayer.add(group).draw();
				angularSpeed = 90;
				var anim = new Konva.Animation(function(frame) {
				   var angleDiff = frame.timeDiff * angularSpeed / 1000;
				   group.find('Circle').rotate(angleDiff);
				  
				}, elementLayer);
				anim.start();
				groupCount += 1;
				
				var statusGroup = new Konva.Group();
				var statusBox = new Konva.Rect({
					x: width - 180,
					y: height - 30,
					width: 150,
					height: 30,
					fill: 'black',
					stroke: 'black',
					strokeWidth: 2,
					cornerRadius: 5
				});
				statusGroup.add(statusBox);
				var statusText = new Konva.Text({
					x: width - 160,
					y: height - 20,
					text: elementSymbol[shape.getId()-1] + ' is added',
					fontSize: 15,
					fontFamily: 'Arial',
					fill: 'white'
				});
				statusGroup.add(statusText);
				var statusAnim = new Konva.Animation(function(frame) {
					statusGroup.setY(statusGroup.getY() - 5);
					if(statusGroup.getY() < -1300)
						statusGroup.visible(false);
				}, statusLayer);
				statusLayer.add(statusGroup).draw();
				statusAnim.start();
			}
		}
		else
		{
			var statusGroup = new Konva.Group();
				var statusBox = new Konva.Rect({
					x: width - 180,
					y: height - 30,
					width: 150,
					height: 30,
					fill: 'black',
					stroke: 'black',
					strokeWidth: 2,
					cornerRadius: 5
				});
				statusGroup.add(statusBox);
				var statusText = new Konva.Text({
					x: width - 160,
					y: height - 20,
					text: '2 Elements Only',
					fontSize: 15,
					fontFamily: 'Arial',
					fill: 'white'
				});
				statusGroup.add(statusText);
				var statusAnim = new Konva.Animation(function(frame) {
					statusGroup.setY(statusGroup.getY() - 5);
					if(statusGroup.getY() < -1300)
						statusGroup.visible(false);
				}, statusLayer);
				statusLayer.add(statusGroup).draw();
				statusAnim.start();
		}
	}
});
elementLayer.on('dblclick', function(evt){
	var node = evt.target;
	console.log(node.getAttr('group'));
	console.log(node.getAttr('place'));
	if(node.getAttr('place') == 'first')
		pickedElements['first'] = -1;
	if(node.getAttr('place') == 'second')
		pickedElements['second'] = -1;

	var group = elementLayer.getChildren()[node.getAttr('group') - 1];
	group.visible(false);
	var statusGroup = new Konva.Group();
	var statusBox = new Konva.Rect({
		x: width - 180,
		y: height - 30,
		width: 150,
		height: 30,
		fill: 'black',
		stroke: 'black',
		strokeWidth: 2,
		cornerRadius: 5
	});
	statusGroup.add(statusBox);
	var statusText = new Konva.Text({
		x: width - 160,
		y: height - 20,
		text: elementSymbol[node.getAttr('atomic')-1] + ' is remove',
		fontSize: 15,
		fontFamily: 'Arial',
		fill: 'white'
	});
	statusGroup.add(statusText);
	var statusAnim = new Konva.Animation(function(frame) {
		statusGroup.setY(statusGroup.getY() - 5);
		if(statusGroup.getY() < -1300)
			statusGroup.visible(false);
	}, statusLayer);
	statusLayer.add(statusGroup).draw();
	statusAnim.start();
});

simulateButton.on('click', function() {
	var firstGroup = elementLayer.getChildren()[pickedGroup['first']];
	var secondGroup = elementLayer.getChildren()[pickedGroup['second']];
	var bondType = recognizeBond(elementType[pickedElements['first']+1],elementType[pickedElements['second']+1]);
	var firstShell = elementShell[pickedElements['first']+1];
	var secondShell = elementShell[pickedElements['second']+1];
	console.log(firstShell);
	console.log(secondShell);
	if(bondType == 'CB')
	{
		var results = covalentChecking(firstShell[firstShell.length - 1], secondShell[secondShell.length - 1]);
		var move = new Konva.Animation(function(frame){
			if(secondGroup.getX() < -225)
			{
				secondGroup.setX(secondGroup.getX() + 1);
			} else
			{
				secondGroup.setX(secondGroup.getX() - 1);
			}
			if(firstGroup.getX() < 225)
			{
				firstGroup.setX(firstGroup.getX() + 1);
			} else
			{
				firstGroup.setX(firstGroup.getX() - 1);
			}
		}, elementLayer);
		move.start();
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: results + ' Compound',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
	if(bondType == 'IB')
	{
		var results = covalentChecking(firstShell[firstShell.length - 1], secondShell[secondShell.length - 1]);
		if(elementType[pickedElements['first']+1] == 'M')
		{
			var arrow = new Konva.Arrow({
			  points: [550,100, 800, 100],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulateLayer.add(arrow).draw();
		
		}
		else
		{
			var arrow = new Konva.Arrow({
			  points: [800,100, 550, 100],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulateLayer.add(arrow).draw();
		}
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: results + ' Compound',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
	if(bondType == 'MB')
	{
		var wedge = new Konva.Wedge({
		  x: 675,
		  y: 100,
		  radius: 70,
		  angle: 60,
		  fill: 'red',
		  stroke: 'black',
		  strokeWidth: 4,
		  rotation: -120
		});
		simulateLayer.add(wedge).draw();
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: 'Cannot Bond',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
});

simulateText.on('click', function() {
	var firstGroup = elementLayer.getChildren()[pickedGroup['first']];
	var secondGroup = elementLayer.getChildren()[pickedGroup['second']];
	var bondType = recognizeBond(elementType[pickedElements['first']+1],elementType[pickedElements['second']+1]);
	var firstShell = elementShell[pickedElements['first']+1];
	var secondShell = elementShell[pickedElements['second']+1];
	if(bondType == 'CB')
	{
		var results = covalentChecking(firstShell[firstShell.length - 1], secondShell[secondShell.length - 1]);
		var move = new Konva.Animation(function(frame){
			if(secondGroup.getX() < -225)
			{
				secondGroup.setX(secondGroup.getX() + 1);
			} else
			{
				secondGroup.setX(secondGroup.getX() - 1);
			}
			if(firstGroup.getX() < 225)
			{
				firstGroup.setX(firstGroup.getX() + 1);
			} else
			{
				firstGroup.setX(firstGroup.getX() - 1);
			}
		}, elementLayer);
		move.start();
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: results + ' Compound',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
	if(bondType == 'IB')
	{
		var results = covalentChecking(firstShell[firstShell.length - 1], secondShell[secondShell.length - 1]);
		if(elementType[pickedElements['first']+1] == 'M')
		{
			var arrow = new Konva.Arrow({
			  points: [550,100, 800, 100],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulateLayer.add(arrow).draw();
		
		}
		else
		{
			var arrow = new Konva.Arrow({
			  points: [800,100, 550, 100],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulateLayer.add(arrow).draw();
		}
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: results + ' Compound',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
	if(bondType == 'MB')
	{
		var wedge = new Konva.Wedge({
		  x: 675,
		  y: 100,
		  radius: 70,
		  angle: 60,
		  fill: 'red',
		  stroke: 'black',
		  strokeWidth: 4,
		  rotation: -120
		});
		simulateLayer.add(wedge).draw();
		var statusGroup = new Konva.Group();
		var statusBox = new Konva.Rect({
			x: width - 180,
			y: height - 30,
			width: 150,
			height: 30,
			fill: 'black',
			stroke: 'black',
			strokeWidth: 2,
			cornerRadius: 5
		});
		statusGroup.add(statusBox);
		var statusText = new Konva.Text({
			x: width - 160,
			y: height - 20,
			text: 'Cannot Bond',
			fontSize: 15,
			fontFamily: 'Arial',
			fill: 'white'
		});
		statusGroup.add(statusText);
		var statusAnim = new Konva.Animation(function(frame) {
			statusGroup.setY(statusGroup.getY() - 5);
			if(statusGroup.getY() < -1300)
				statusGroup.visible(false);
		}, statusLayer);
		statusLayer.add(statusGroup).draw();
		statusAnim.start();
	}
});

var backgroundBox1 = new Konva.Rect({
	x: 0,
	y: 0,
	width: 350,
	height: 1500,
	fill: 'black',
	stroke: 'white',
	strokeWidth: 2,
	cornerRadius: 5
});
var backgroundBox2 = new Konva.Rect({
	x: 350,
	y: 0,
	width: 700,
	height: 1500,
	fill: 'yellow',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
var backgroundBox3 = new Konva.Rect({
	x: 1050,
	y: 0,
	width: 300,
	height: 1500,
	fill: 'cyan',
	stroke: 'black',
	strokeWidth: 2,
	cornerRadius: 5
});
backgroundLayer.add(backgroundBox1).draw();
backgroundLayer.add(backgroundBox2).draw();
backgroundLayer.add(backgroundBox3).draw();
stage.add(backgroundLayer, layer, elementLayer, statusLayer, simulateLayer);