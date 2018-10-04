var width = window.innerWidth;
var height = window.innerHeight;
var elementImages = {
	1: 'images/1.png',
	2: 'images/2.png',
	3: 'images/3.png',
	4: 'images/4.png',
	5: 'images/5.png',
	6: 'images/6.png',
	7: 'images/7.png',
	8: 'images/8.png',
	9: 'images/9.png',
	10: 'images/10.png',
	11: 'images/11.png',
	12: 'images/12.png',
	13: 'images/13.png',
	14: 'images/14.png',
	15: 'images/15.png',
	16: 'images/16.png',
	17: 'images/17.png',
	18: 'images/18.png',
	19: 'images/19.png',
	20: 'images/20.png',
	21: 'images/21.png',
	22: 'images/22.png',
	23: 'images/23.png',
	24: 'images/24.png',
	25: 'images/25.png',
	26: 'images/26.png',
	27: 'images/27.png',
	28: 'images/28.png',
	29: 'images/29.png',
	30: 'images/30.png',
	31: 'images/31.png',
	32: 'images/32.png',
	33: 'images/33.png',
	34: 'images/34.png',
	35: 'images/35.png',
	36: 'images/36.png',
	37: 'images/37.png',
	38: 'images/38.png',
	39: 'images/39.png',
	40: 'images/40.png',
	41: 'images/41.png',
	42: 'images/42.png',
	43: 'images/43.png',
	44: 'images/44.png',
	45: 'images/45.png',
	46: 'images/46.png',
	47: 'images/47.png',
	48: 'images/48.png',
	49: 'images/49.png',
	50: 'images/50.png',
	51: 'images/51.png',
	52: 'images/52.png',
	53: 'images/53.png',
	54: 'images/54.png',
	55: 'images/55.png',
	56: 'images/56.png',
	57: 'images/57.png',
	58: 'images/58.png',
	59: 'images/59.png',
	60: 'images/60.png',
	61: 'images/61.png',
	62: 'images/62.png',
	63: 'images/63.png',
	64: 'images/64.png',
	65: 'images/65.png',
	66: 'images/66.png',
	67: 'images/67.png',
	68: 'images/68.png',
	69: 'images/69.png',
	70: 'images/70.png',
	71: 'images/71.png',
	72: 'images/72.png',
	73: 'images/73.png',
	74: 'images/74.png',
	75: 'images/75.png',
	76: 'images/76.png',
	77: 'images/77.png',
	78: 'images/78.png',
	79: 'images/79.png',
	80: 'images/80.png',
	81: 'images/81.png',
	82: 'images/82.png',
	83: 'images/83.png',
	84: 'images/84.png',
	85: 'images/85.png',
	86: 'images/86.png',
	87: 'images/87.png',
	88: 'images/88.png',
	89: 'images/89.png',
	90: 'images/90.png',
	91: 'images/91.png',
	92: 'images/92.png',
	93: 'images/93.png',
	94: 'images/94.png',
	95: 'images/95.png',
	96: 'images/96.png',
	97: 'images/97.png',
	98: 'images/98.png',
	99: 'images/99.png',
	100: 'images/100.png',
	101: 'images/101.png',
	102: 'images/102.png',
	103: 'images/103.png',
	104: 'images/104.png',
	105: 'images/105.png',
	106: 'images/106.png',
	107: 'images/107.png',
	108: 'images/108.png',
	109: 'images/109.png',
	110: 'images/110.png',
	111: 'images/111.png',
	112: 'images/112.png',
	113: 'images/113.png',
	114: 'images/114.png',
	115: 'images/115.png',
	116: 'images/116.png',
	117: 'images/117.png',
	118: 'images/118.png',
};

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

var elementWeight = {
	1: 1.008,
	2: 4.003,
	3: 6.941,
	4: 9.012,
	5: 10.811,
	6: 12.011,
	7: 14.007,
	8: 15.999,
	9: 18.998,
	10: 20.180,
	11: 22.990,
	12: 24.305,
	13: 26.982,
	14: 28.086,
	15: 30.974,
	16: 32.066,
	17: 35.453,
	18: 39.984,
	19: 39.098,
	20: 40.078,
	21: 44.956,
	22: 47.88,
	23: 50.942,
	24: 51.996,
	25: 54.938,
	26: 55.847,
	27: 58.933,
	28: 58.693,
	29: 63.546,
	30: 65.39,
	31: 69.732,
	32: 72.51,
	33: 74.922,
	34: 78.09,
	35: 79.904,
	36: 84.80,
	37: 78.09,
	38: 87.52,
	39: 88.906,
	40: 91.224,
	41: 92.906,
	42: 95.94,
	43: 98.907,
	44: 101.70,
	45: 102.906,
	46: 106.42,
	47: 107.868,
	48: 112.411,
	49: 114.818,
	50: 118.71,
	51: 121.760,
	52: 127.6,
	53: 126.904,
	54: 131.29,
	55: 132.905,
	56: 137.327,
	57: 138.906,
	58: 140.115,
	59: 140.908,
	60: 144.24,
	61: 144.913,
	62: 150.36,
	63: 151.966,
	64: 157.25,
	65: 158.925,
	66: 162.50,
	67: 164.930,
	68: 167.26,
	69: 168.934,
	70: 173.04,
	71: 174.967,
	72: 178.49,
	73: 180.948,
	74: 183.85,
	75: 186.207,
	76: 190.23,
	77: 192.22,
	78: 195.08,
	79: 196.967,
	80: 200.59,
	81: 204.383,
	82: 207.2,
	83: 208.980,
	84: 208.982,
	85: 209.987,
	86: 222.018,
	87: 223.020,
	88: 226.025,
	89: 227.028,
	90: 232.038,
	91: 231.036,
	92: 238.029,
	93: 237.048,
	94: 244.064,
	95: 243.061,
	96: 247.070,
	97: 247.070,
	98: 251.080,
	99: 254,
	100: 257.095,
	101: 258.08,
	102: 259.101,
	103: 262,
	104: 261,
	105: 262,
	106: 266,
	107: 264,
	108: 269,
	109: 268,
	110: 296,
	111: 272,
	112: 277,
	113: 'unknown',
	114: 289,
	115: 'unknown',
	116: 298,
	117: 'unknown',
	118: 'unknown',
};

var elementName = {
	1: 'Hydrogen',
	2: 'Helium',
	3: 'Lithium',
	4: 'Beryllium',
	5: 'Boron',
	6: 'Carbon',
	7: 'Nitrogen',
	8: 'Oxygen',
	9: 'Flourine',
	10: 'Neon',
	11: 'Sodium',
	12: 'Magnesium',
	13: 'Aluminum',
	14: 'Silicon',
	15: 'Phosphorus',
	16: 'Sulfur',
	17: 'Chlorine',
	18: 'Argon',
	19: 'Potassium',
	20: 'Calcium',
	21: 'Scandium',
	22: 'Titanium',
	23: 'Vanadium',
	24: 'Chromium',
	25: 'Manganese',
	26: 'Iron',
	27: 'Cobalt',
	28: 'Nickel',
	29: 'Copper',
	30: 'Zinc',
	31: 'Gallium',
	32: 'Germanium',
	33: 'Arsenic',
	34: 'Selenium',
	35: 'Bromine',
	36: 'Krypton',
	37: 'Rubidium',
	38: 'Strontium',
	39: 'Yttrium',
	40: 'Zirconium',
	41: 'Niobium',
	42: 'Molybdenum',
	43: 'Technetium',
	44: 'Ruthenium',
	45: 'Rhodium',
	46: 'Palladium',
	47: 'Silver',
	48: 'Cadmium',
	49: 'Indium',
	50: 'Tin',
	51: 'Antimony',
	52: 'Tellurium',
	53: 'Iodine',
	54: 'Xenon',
	55: 'Cesium',
	56: 'Barium',
	57: 'Lanthanum',
	58: 'Cerium',
	59: 'Praseodymium',
	60: 'Neodymium',
	61: 'Promethium',
	62: 'Samarium',
	63: 'Europium',
	64: 'Gadolinium',
	65: 'Terbium',
	66: 'Dysprosium',
	67: 'Holmium',
	68: 'Erbium',
	69: 'Thulium',
	70: 'Ytterbium',
	71: 'Lutetium',
	72: 'Hafnium',
	73: 'Tantanium',
	74: 'Tungsten',
	75: 'Rhemium',
	76: 'Osmium',
	77: 'Iridium',
	78: 'Platinum',
	79: 'Gold',
	80: 'Mercury',
	81: 'Thallium',
	82: 'Lead',
	83: 'Bismuth',
	84: 'Polonium',
	85: 'Astatine',
	86: 'Radon',
	87: 'Francium',
	88: 'Radium',
	89: 'Actinium',
	90: 'Thorium',
	91: 'Protactinium',
	92: 'Uranium',
	93: 'Neptunium',
	94: 'Plutonium',
	95: 'Americium',
	96: 'Curium',
	97: 'Berkelium',
	98: 'Californium',
	99: 'Einsteinium',
	100: 'Fermium',
	101: 'Mendelevium',
	102: 'Nobelium',
	103: 'Lawrencium',
	104: 'Rutherfordium',
	105: 'Dubnium',
	106: 'Seaborgium',
	107: 'Bohrium',
	108: 'Hassium',
	109: 'Meitnerium',
	110: 'Darmstadium',
	111: 'Roentgenium',
	112: 'Copernicium',
	113: 'Ununtrium',
	114: 'Flerovium',
	115: 'Ununpentium',
	116: 'Livermorium',
	117: 'Ununseptium',
	118: 'Ununoctium'
};

var colors = ['red', 'orange', 'cyan', 'green', 'blue', 'purple'];
var elementSymbol = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y',
 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr',
  'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au',
   'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es',
	'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Uub', 'Uut', 'Uuq', 'Uup', 'Uuh', 'Uus', 'Uuo',];
var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});
var layer = new Konva.Layer();
var buttonLayer = new Konva.Layer();
var element1Layer = new Konva.Layer();
var element2Layer = new Konva.Layer();
var statusLayer = new Konva.Layer();
var arrowLayer = new Konva.Layer();
var analytics1Layer = new Konva.Layer();
var analytics2Layer = new Konva.Layer();
var elementProfileLayer = new Konva.Layer();
var backgroundLayer = new Konva.Layer();
var logoLayer = new Konva.Layer();
var simulationLayer = new Konva.Layer();
var bondLayer = new Konva.Layer();
var namingLayer = new Konva.Layer();
var colorIndicatorLayer = new Konva.Layer();
var newlayer = new Konva.Layer();
var inputCount = 0;
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

function checkElement(last)
{
	if(last == 2)
		return 'Stable';
	else if(last == 8)
		return 'Stable';
	else if(last == 18)
		return 'Stable';
	else if(last == 32)
		return 'Stable';
	else
		return 'Unstable';
}

function transferElectron(first,second)
{
	let twoResult = [];
	if(elementType[first] == 'M')
	{
		let source = elementShell[second];
		while(checkElement(source[source.length - 1]) != 'Stable')
		{
			second += 1;
			first = first - 1;
			source = elementShell[second]
		}
		twoResult.push(first);
		twoResult.push(second);
	
	} 
	else
	{
		let source = elementShell[first];
		while(checkElement(source[source.length - 1]) != 'Stable')
		{
			first += 1;
			second = second - 1;
			source = elementShell[first]
		}
		twoResult.push(first);
		twoResult.push(second);
	}
	return twoResult;
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

function bothChecking(firstLastShell, secondLastShell)
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

function analytics1(elementNumber)
{
	analytics1Layer.destroyChildren();
	analytics1Layer.clear();
	var stable = 0;
	var unstable = 0;
	for(let x = 0;x < 118; x++)
	{
		let first = elementShell[elementNumber];
		let second = elementShell[x+1];
		let results = bothChecking(first[first.length - 1], second[second.length - 1]);
		if(results == 'Stable')
		{
			stable += 1;
		}
		else
		{
			unstable += 1
		}
	}
	let percent = Math.round((stable / 118) * 100);
	let unPercent = 100 - percent;
	var unstalbeWedge = new Konva.Wedge({
	  x: 450,
	  y: 500,
	  radius: 70,
	  angle: 360,
	  fill: 'red',
	  rotation: 0
	});
	var stableWedge = new Konva.Wedge({
	  x: 450,
	  y: 500,
	  radius: 70,
	  angle: 360 * (stable / 118),
	  fill: 'blue',
	  rotation: 180
	});
	let elementnNameText = new Konva.Text({
		x: 310,
		y: 400,
		text: elementName[elementNumber],
		fontSize: 15,
		fontFamily: 'Arial',
		fill: 'black'
	});
	let unstableColor = new Konva.Rect({
		x: 400,
		y: 600 - 10,
		width: 30,
		height: 10,
		fill: 'red',
		stroke: 'white',
		strokeWidth: 2,
		cornerRadius: 5
	});
	let stableColor = new Konva.Rect({
		x: 500,
		y: 600 - 10,
		width: 30,
		height: 10,
		fill: 'blue',
		stroke: 'white',
		strokeWidth: 2,
		cornerRadius: 5
	});
	let stablePercentageText = new Konva.Text({
		x: 500 + 40,
		y: 600 - 15,
		text: percent + '%',
		fontSize: 20,
		fontFamily: 'Arial',
		fill: 'black'
	});
	let stableUnstableText = new Konva.Text({
		x: 400 + 40,
		y: 600 - 15,
		text: unPercent + '%',
		fontSize: 20,
		fontFamily: 'Arial',
		fill: 'black'
	});
	analytics1Layer.add(unstalbeWedge).draw();
	analytics1Layer.add(stableWedge).draw();
	analytics1Layer.add(elementnNameText).draw();
	analytics1Layer.add(unstableColor).draw();
	analytics1Layer.add(stableColor).draw();
	analytics1Layer.add(stablePercentageText).draw();
	analytics1Layer.add(stableUnstableText).draw();
}

function analytics2(elementNumber)
{
	analytics2Layer.destroyChildren();
	analytics2Layer.clear();
	let stable = 0;
	let unstable = 0;
	for(let x = 0;x < 118; x++)
	{
		let first = elementShell[elementNumber];
		let second = elementShell[x+1];
		let results = bothChecking(first[first.length - 1], second[second.length - 1]);
		if(results == 'Stable')
		{
			stable += 1;
		}
		else
		{
			unstable += 1
		}
	}
	let percent = Math.round((stable / 118) * 100);
	let unPercent = 100 - percent;
	let unstalbeWedge = new Konva.Wedge({
	  x: 900,
	  y: 500,
	  radius: 70,
	  angle: 360,
	  fill: 'red',
	  rotation: 0
	});
	let stableWedge = new Konva.Wedge({
	  x: 900,
	  y: 500,
	  radius: 70,
	  angle: 360 * (stable / 118),
	  fill: 'blue',
	  rotation: 180
	});
	let elementnNameText = new Konva.Text({
		x: 980,
		y: 400,
		text: elementName[elementNumber],
		fontSize: 15,
		fontFamily: 'Arial',
		fill: 'black'
	});
	let unstableColor = new Konva.Rect({
		x: 850,
		y: 600 - 10,
		width: 30,
		height: 10,
		fill: 'red',
		stroke: 'white',
		strokeWidth: 2,
		cornerRadius: 5
	});
	let stableColor = new Konva.Rect({
		x: 950,
		y: 600 - 10,
		width: 30,
		height: 10,
		fill: 'blue',
		stroke: 'white',
		strokeWidth: 2,
		cornerRadius: 5
	});
	let stablePercentageText = new Konva.Text({
		x: 950 + 40,
		y: 600 - 15,
		text: percent + '%',
		fontSize: 20,
		fontFamily: 'Arial',
		fill: 'black'
	});
	let stableUnstableText = new Konva.Text({
		x: 850 + 40,
		y: 600 - 15,
		text: unPercent + '%',
		fontSize: 20,
		fontFamily: 'Arial',
		fill: 'black'
	});
	analytics2Layer.add(unstalbeWedge).draw();
	analytics2Layer.add(stableWedge).draw();
	analytics2Layer.add(elementnNameText).draw();
	analytics2Layer.add(unstableColor).draw();
	analytics2Layer.add(stableColor).draw();
	analytics2Layer.add(stableUnstableText).draw();
	analytics2Layer.add(stablePercentageText).draw();
}
function elementProfile(elementNumber)
{
	elementProfileLayer.destroyChildren();
	elementProfileLayer.clear();
	let imageObj = new Image();
	imageObj.src = elementImages[elementNumber];
	let buttonImage = new Konva.Image({
		x: width - 180,
		y: height - 400,
		image: imageObj,
		width: 70,
		height: 70,
	});
	let atomicText = new Konva.Text({
		x: width - 270,
		y: height - 180,
		text: 'Atomic:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let typeText = new Konva.Text({
		x: width - 270,
		y: height - 140,
		text: 'Type:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let shellText = new Konva.Text({
		x: width - 270,
		y: height - 100,
		text: 'Shell:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let symbolText = new Konva.Text({
		x: width - 270,
		y: height - 300,
		text: 'Symbol:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let nameText = new Konva.Text({
		x: width - 270,
		y: height - 260,
		text: 'Name:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let weightText = new Konva.Text({
		x: width - 270,
		y: height - 220,
		text: 'Weight:',
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let atomicResultText = new Konva.Text({
		x: width - 180,
		y: height - 180,
		text: elementNumber,
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let type = elementType[elementNumber];
	let typeResult;
	if(type == 'M')
		typeResult = 'Metal';
	else
		typeResult = 'Nonmetal';
	let typeResultText = new Konva.Text({
		x: width - 200,
		y: height - 140,
		text: typeResult,
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let shellResultText = new Konva.Text({
		x: width - 200,
		y: height - 100,
		text: numberShells(elementNumber),
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let nameResultText = new Konva.Text({
		x: width - 190,
		y: height - 260,
		text: elementName[elementNumber],
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let symbolResultText = new Konva.Text({
		x: width - 170,
		y: height - 300,
		text: elementSymbol[elementNumber - 1],
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	let weightResultText = new Konva.Text({
		x: width - 180,
		y: height - 220,
		text: elementWeight[elementNumber],
		fontSize: 27,
		fontFamily: 'Arial',
		fill: 'white',
	});
	elementProfileLayer.add(buttonImage).draw();
	elementProfileLayer.add(atomicText).draw();
	elementProfileLayer.add(typeText).draw();
	elementProfileLayer.add(shellText).draw();
	elementProfileLayer.add(nameText).draw();
	elementProfileLayer.add(weightText).draw();
	elementProfileLayer.add(symbolText).draw();
	elementProfileLayer.add(atomicResultText).draw();
	elementProfileLayer.add(typeResultText).draw();
	elementProfileLayer.add(shellResultText).draw();
	elementProfileLayer.add(nameResultText).draw();
	elementProfileLayer.add(symbolResultText).draw();
	elementProfileLayer.add(weightResultText).draw();
}
function changeButtons(start,end)
{
	var row = 10;
	var column = 10;
	var count = 0;
	var space = 70;
	for(var i = start;i < end; i++)
	{
		if(i % 3 == 0)
		{
			if(i == 0 || i == 21 || i == 42 || i == 63 || i == 84 || i == 105)
			{
				column += 0;
			}
			else
			{
				column += 75;
			}
			space = 0;
			count = 0
		}
		var imageObj = new Image();
		imageObj.src = elementImages[i+1];
		var buttonImage = new Konva.Image({
			x: row * (count + 1) + space,
			y: column,
			image: imageObj,
			width: 70,
			height: 70,
			id: i+1
		});
		space += 70 + 5
		count += 1;
		buttonLayer.add(buttonImage).draw();
	}
}
function updateStructure(first,second)
{
	let twoResult = transferElectron(first, second);
	console.log(twoResult[0]);
	console.log(twoResult[1]);
	let elementColor1 = colors[Math.round(Math.random() * 5)];
	let elementColor2 = colors[Math.round(Math.random() * 5)];
	let firstG = new Konva.Group({
	  draggable: true 
	});
	let firstMolecule = new Konva.Circle({
		x: 450,
		y: 150,
		fill: elementColor1,
		stroke: 'black',
		radius: 30,
		atomic: first,
		place: 'first'
	});
	firstG.add(firstMolecule);
	let firstRingRange = 40;
	for(let i = 0;i < numberShells(twoResult[0]);i++)
	{
		let firstRingMolecule = new Konva.Ring({
			x: 450,
			y: 150,
			innerRadius: firstRingRange,
			outerRadius: firstRingRange+1,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 1,
			atomic: twoResult[0],
			place: 'first'
		});	
		firstG.add(firstRingMolecule);
		for(let x = 0;x < elementShell[twoResult[0]][i];x++)
		{
			let firstAtom = new Konva.Circle({
				x: 450,
				y: 150,
				fill: elementColor1,
				stroke: 'black',
				radius: 5,
				offset: {
					x: -firstRingRange,
					y: 0
				}
			});
			if(i == 0)
			{
				firstAtom.rotate(180 * x);
			}
			if(i == 1)
			{
				firstAtom.rotate(45 * x);
			}
			if(i == 2)
			{
				firstAtom.rotate(20 * x);
			}
			if(i == 3 || i == 4)
			{
				firstAtom.rotate(11 * x);
			}
			if(i == 5)
			{
				firstAtom.rotate(20 * x);
			}
			if(i == 6)
			{
				firstAtom.rotate(45 * x);
			}
			firstG.add(firstAtom);
		}
		firstRingRange += 10;
		
	}
	element1Layer.add(firstG).draw();
	angularSpeed = 90;
	let firstAnim = new Konva.Animation(function(frame) {
	   let angleDiff = frame.timeDiff * angularSpeed / 1000;
	   firstG.find('Circle').rotate(angleDiff);
	  
	}, element1Layer);
	firstAnim.start();
	
	let secondG = new Konva.Group({
	  draggable: true 
	});
	let secondMolecule = new Konva.Circle({
		x: 900,
		y: 150,
		fill: elementColor2,
		stroke: 'black',
		radius: 30,
		atomic: twoResult[1],
		place: 'second'
	});
	secondG.add(secondMolecule);
	let secondRingRange = 40;
	for(let i = 0;i < numberShells(twoResult[1]);i++)
	{
		let secondRingMolecule = new Konva.Ring({
			x: 900,
			y: 150,
			innerRadius: secondRingRange,
			outerRadius: secondRingRange+1,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 1,
			atomic: twoResult[1],
			place: 'second'
		});	
		secondG.add(secondRingMolecule);
		for(let x = 0;x < elementShell[twoResult[1]][i];x++)
		{
			let secondAtom = new Konva.Circle({
				x: 900,
				y: 150,
				fill: elementColor2,
				stroke: 'black',
				radius: 5,
				offset: {
					x: -secondRingRange,
					y: 0
				}
			});
			if(i == 0)
			{
				secondAtom.rotate(180 * x);
			}
			if(i == 1)
			{
				secondAtom.rotate(45 * x);
			}
			if(i == 2)
			{
				secondAtom.rotate(20 * x);
			}
			if(i == 3 || i == 4)
			{
				secondAtom.rotate(11 * x);
			}
			if(i == 5)
			{
				secondAtom.rotate(20 * x);
			}
			if(i == 6)
			{
				secondAtom.rotate(45 * x);
			}
			secondG.add(secondAtom);
		}
		secondRingRange += 10;
		
	}
	element2Layer.add(secondG).draw();
	angularSpeed = 90;
	let secondAnim = new Konva.Animation(function(frame) {
	   let angleDiff = frame.timeDiff * angularSpeed / 1000;
	   secondG.find('Circle').rotate(angleDiff);
	  
	}, element2Layer);
	secondAnim.start();
	
}
changeButtons(0,21);
var magic = new Konva.Image({
	x: 0,
	y: 0,
	width: 1,
	height: 1,
});
buttonLayer.add(magic);
var imageObj1 = new Image();
imageObj1.onload = function() {
	magic.image(imageObj1);
	buttonLayer.draw();
};
imageObj1.src = 'images/1.png';
var nextArrow = new Konva.Arrow({
  x: 210,
  y: 580,
  points: [10,10, 10, 10],
  pointerLength: 80,
  pointerWidth : 50,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  id: 0
});
var backArrow = new Konva.Arrow({
  x: 50,
  y: 600,
  points: [10,10, 10, 10],
  pointerLength: 80,
  pointerWidth : 50,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 4,
  id: 1
});
backArrow.rotation(180);
arrowLayer.add(backArrow).draw();
arrowLayer.add(nextArrow).draw();
buttonLayer.on('mouseover', function(evt) {
	var shape = evt.target;
	document.body.style.cursor = 'pointer';
	shape.scaleX(1.2);
	shape.scaleY(1.2);
	buttonLayer.draw();
	elementProfile(shape.getAttr('id'));
	
});
buttonLayer.on('mouseout', function(evt) {
	var shape = evt.target;
	document.body.style.cursor = 'default';
	shape.scaleX(1);
	shape.scaleY(1);
	buttonLayer.draw();
});
var pickedElements = {
	'first': -1,
	'second': -1
};
buttonLayer.on('click', function(evt) {
	var shape = evt.target;
	var elementColor = colors[Math.round(Math.random() * 5)];
	if(shape)
	{
		if(checkEntry(pickedElements['first'],pickedElements['second']))
		{
			inputCount += 1;
			if(pickedElements['first'] == -1)
			{
				analytics1(shape.getAttr('id'));
				pickedElements['first'] = shape.getId();
				var group = new Konva.Group({
				  draggable: true 
				});
				var molecule = new Konva.Circle({
					x: 450,
					y: 150,
					fill: elementColor,
					stroke: 'black',
					radius: 30,
					atomic: shape.getId(),
					place: 'first'
				});
				group.add(molecule);
				var ringRange = 40;
				for(var i = 0;i < numberShells(shape.getId());i++)
				{
					var ringMolecule = new Konva.Ring({
						x: 450,
						y: 150,
						innerRadius: ringRange,
						outerRadius: ringRange+1,
						fill: 'yellow',
						stroke: 'black',
						strokeWidth: 1,
						atomic: shape.getId(),
						place: 'first'
					});	
					group.add(ringMolecule);
					for(var x = 0;x < elementShell[shape.getId()][i];x++)
					{
						var atom = new Konva.Circle({
							x: 450,
							y: 150,
							fill: elementColor,
							stroke: 'black',
							radius: 5,
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
				element1Layer.add(group).draw();
				angularSpeed = 90;
				var anim = new Konva.Animation(function(frame) {
				   var angleDiff = frame.timeDiff * angularSpeed / 1000;
				   group.find('Circle').rotate(angleDiff);
				  
				}, element1Layer);
				anim.start();
			}
			else
			{
				analytics2(shape.getAttr('id'));
				pickedElements['second'] = shape.getId();
				var group = new Konva.Group({
				  draggable: true 
				});
				var position = JSON.parse(JSON.stringify(stage.getPointerPosition()));
				var molecule = new Konva.Circle({
					x: 900,
					y: 150,
					fill: elementColor,
					stroke: 'black',
					radius: 30,
					atomic: shape.getId(),
					place: 'second'
				});
				group.add(molecule);
				var ringRange = 40;
				for(var i = 0;i < numberShells(shape.getId());i++)
				{
					var ringMolecule = new Konva.Ring({
						x: 900,
						y: 150,
						innerRadius: ringRange,
						outerRadius: ringRange+1,
						fill: 'yellow',
						stroke: 'black',
						strokeWidth: 1,
						atomic: shape.getId(),
						place: 'second'
					});	
					group.add(ringMolecule);
					for(var x = 0;x < elementShell[shape.getId()][i];x++)
					{
						var atom = new Konva.Circle({
							x: 900,
							y: 150,
							fill: elementColor,
							stroke: 'black',
							radius: 5,
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
				element2Layer.add(group).draw();
				angularSpeed = 90;
				var anim = new Konva.Animation(function(frame) {
				   var angleDiff = frame.timeDiff * angularSpeed / 1000;
				   group.find('Circle').rotate(angleDiff);
				  
				}, element2Layer);
				anim.start();
			}
		}
		else
		{
		}
		if(inputCount == 2)
		{
			let bondType = recognizeBond(elementType[pickedElements['first']],elementType[pickedElements['second']]);
			if(bondType == 'CB')
			{
				let bondResultText = new Konva.Text({
					x: 570,
					y: 30,
					text: 'Covalent Bonding',
					fontSize: 27,
					fontFamily: 'Arial',
					fill: 'black',
				});
				bondLayer.add(bondResultText).draw();
			}
			if(bondType == 'IB')
			{
				let bondResultText = new Konva.Text({
					x: 590,
					y: 30,
					text: 'Ionic Bonding',
					fontSize: 27,
					fontFamily: 'Arial',
					fill: 'black',
				});
				bondLayer.add(bondResultText).draw();
			}
			if(bondType == 'MB')
			{
				let bondResultText = new Konva.Text({
					x: 600,
					y: 30,
					text: 'No Bonding',
					fontSize: 27,
					fontFamily: 'Arial',
					fill: 'black',
				});
				bondLayer.add(bondResultText).draw();
			}
		}
	}
});
element1Layer.on('dblclick', function(evt){
	element1Layer.destroyChildren();
	element1Layer.clear();
	pickedElements['first'] = -1;
	analytics1Layer.destroyChildren();
	analytics1Layer.clear();
	simulationLayer.destroyChildren();
	simulationLayer.clear();
	bondLayer.destroyChildren();
	bondLayer.clear();
	namingLayer.destroyChildren();
	namingLayer.clear();
	inputCount -= 1;
});
element2Layer.on('dblclick', function(evt){
	element2Layer.destroyChildren();
	element2Layer.clear();
	pickedElements['second'] = -1;
	analytics2Layer.destroyChildren();
	analytics2Layer.clear();
	simulationLayer.destroyChildren();
	simulationLayer.clear();
	bondLayer.destroyChildren();
	bondLayer.clear();
	namingLayer.destroyChildren();
	namingLayer.clear();
	inputCount -= 1;
});
arrowLayer.on('mouseover', function(evt) {
	var shape = evt.target;
	document.body.style.cursor = 'pointer';
	shape.scaleX(1.2);
	shape.scaleY(1.2);
	shape.fill('red');
	arrowLayer.draw();
});
arrowLayer.on('mouseout', function(evt) {
	var shape = evt.target;
	document.body.style.cursor = 'default';
	shape.scaleX(1);
	shape.scaleY(1);
	shape.fill('white');
	arrowLayer.draw();
});
var elementIndicator = 0;
arrowLayer.on('click', function(evt) {
	var shape = evt.target;
	if(shape)
	{
		if(shape.getAttr('id') == 0)
		{
			elementIndicator += 1;
			if(elementIndicator > 5)
			{
				elementIndicator = 5;
			}
			buttonLayer.destroyChildren();
			buttonLayer.clear();
			if(elementIndicator == 1)
				changeButtons(21,42);
			if(elementIndicator == 2)
				changeButtons(42,63);
			if(elementIndicator == 3)
				changeButtons(63,84);
			if(elementIndicator == 4)
				changeButtons(84,105);
			if(elementIndicator == 5)
				changeButtons(105,118);
			for(var x = 0;x < buttonLayer.getChildren().length;x++)
			{
				console.log(buttonLayer.getChildren()[x]);
			}
		}
		if(shape.getAttr('id') == 1)
		{
			elementIndicator -= 1;
			if(elementIndicator < 0)
			{
				elementIndicator = 0;
			}
			buttonLayer.destroyChildren();
			buttonLayer.clear();
			if(elementIndicator == 0)
				changeButtons(0,21);
			if(elementIndicator == 1)
				changeButtons(21,42);
			if(elementIndicator == 2)
				changeButtons(42,63);
			if(elementIndicator == 3)
				changeButtons(63,84);
			if(elementIndicator == 4)
				changeButtons(84,105);
			for(var x = 0;x < buttonLayer.getChildren().length;x++)
			{
				console.log(buttonLayer.getChildren()[x]);
			}
		}
		
	
	}
});
var simulateLayer = new Konva.Layer();
var simulateButton = new Konva.Rect({
	x: width - 270,
	y: height - 60,
	width: 250,
	height: 50,
	fill: 'black',
	stroke: 'white',
	strokeWidth: 2,
	cornerRadius: 5
});
var simulateText = new Konva.Text({
	x: width - 200,
	y: height - 50,
	text: 'Simulate',
	fontSize: 30,
	fontFamily: 'Arial',
	fill: 'white'
});
simulateLayer.add(simulateButton).draw();
simulateLayer.add(simulateText).draw();
simulateLayer.on('mouseover', function() {
	document.body.style.cursor = 'pointer';
	simulateButton.fill('red');
	simulateText.fill('white');
	simulateLayer.draw();
});
simulateLayer.on('mouseout', function() {
	document.body.style.cursor = 'default';
	simulateButton.fill('black');
	simulateText.fill('white');
	simulateLayer.draw();
});
simulateButton.on('click', function() {
	let bondType = recognizeBond(elementType[pickedElements['first']],elementType[pickedElements['second']]);
	let first = elementShell[pickedElements['first']];
	let second = elementShell[pickedElements['second']];
	let results = bothChecking(first[first.length - 1], second[second.length - 1]);
	console.log(bondType);
	if(bondType == 'CB')
	{
		let nameText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 50,
			text: 'Name : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let nameTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 50,
			text: elementName[pickedElements['first']] + ' '  + elementName[pickedElements['second']],
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 20,
			text: 'Result : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 20,
			text: results,
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		namingLayer.add(nameText).draw();
		namingLayer.add(nameTextResult).draw();
		namingLayer.add(resultText).draw();
		namingLayer.add(resultTextResult).draw();
		let firstGroup = element1Layer.getChildren()[element1Layer.getChildren().length - 1];
		let secondGroup = element2Layer.getChildren()[element2Layer.getChildren().length - 1];
		let move1 = new Konva.Animation(function(frame){
			if(firstGroup.getX() < 225)
			{
				firstGroup.setX(firstGroup.getX() + 1);
			} else
			{
				firstGroup.setX(firstGroup.getX() - 1);
			}
		}, element1Layer);
		move1.start();
		let move2 = new Konva.Animation(function(frame){
			if(secondGroup.getX() < -225)
			{
				secondGroup.setX(secondGroup.getX() + 1);
			} else
			{
				secondGroup.setX(secondGroup.getX() - 1);
			}
		}, element2Layer);
		move2.start();
	}
	if(bondType == 'IB')
	{
		element1Layer.destroyChildren();
		element1Layer.clear();
		element2Layer.destroyChildren();
		element2Layer.clear();
		updateStructure(pickedElements['first'],pickedElements['second']);
		if(elementType[pickedElements['first']] == 'M')
		{
			let arrow = new Konva.Arrow({
			  points: [550,150, 800, 150],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulationLayer.add(arrow).draw();
			let nameText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 50,
				text: 'Name : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let nameTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 50,
				text: elementName[pickedElements['first']] + ' '  + elementName[pickedElements['second']],
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 20,
				text: 'Result : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 20,
				text: results,
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			namingLayer.add(nameText).draw();
			namingLayer.add(nameTextResult).draw();
			namingLayer.add(resultText).draw();
			namingLayer.add(resultTextResult).draw();
		}
		else
		{
			let arrow = new Konva.Arrow({
			  points: [800,150, 550, 150],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulationLayer.add(arrow).draw();
			let nameText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 50,
				text: 'Name : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let nameTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 50,
				text: elementName[pickedElements['second']] + ' '  + elementName[pickedElements['first']],
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 20,
				text: 'Result : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 20,
				text: results,
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			namingLayer.add(nameText).draw();
			namingLayer.add(nameTextResult).draw();
			namingLayer.add(resultText).draw();
			namingLayer.add(resultTextResult).draw();
		}
	}
	if(bondType == 'MB')
	{
		let nameText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 50,
			text: 'Name : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let nameTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 50,
			text: 'No Result',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 20,
			text: 'Result : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 20,
			text: 'No Bonding',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		namingLayer.add(nameText).draw();
		namingLayer.add(nameTextResult).draw();
		namingLayer.add(resultText).draw();
		namingLayer.add(resultTextResult).draw();
	
	}
});
simulateText.on('click', function() {
	let bondType = recognizeBond(elementType[pickedElements['first']],elementType[pickedElements['second']]);
	let first = elementShell[pickedElements['first']];
	let second = elementShell[pickedElements['second']];
	let results = bothChecking(first[first.length - 1], second[second.length - 1]);
	console.log(bondType);
	if(bondType == 'CB')
	{
		let nameText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 50,
			text: 'Name : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let nameTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 50,
			text: elementName[pickedElements['first']] + ' '  + elementName[pickedElements['second']],
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 20,
			text: 'Result : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 20,
			text: results,
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		namingLayer.add(nameText).draw();
		namingLayer.add(nameTextResult).draw();
		namingLayer.add(resultText).draw();
		namingLayer.add(resultTextResult).draw();
		let firstGroup = element1Layer.getChildren()[element1Layer.getChildren().length - 1];
		let secondGroup = element2Layer.getChildren()[element2Layer.getChildren().length - 1];
		let move1 = new Konva.Animation(function(frame){
			if(firstGroup.getX() < 225)
			{
				firstGroup.setX(firstGroup.getX() + 1);
			} else
			{
				firstGroup.setX(firstGroup.getX() - 1);
			}
		}, element1Layer);
		move1.start();
		let move2 = new Konva.Animation(function(frame){
			if(secondGroup.getX() < -225)
			{
				secondGroup.setX(secondGroup.getX() + 1);
			} else
			{
				secondGroup.setX(secondGroup.getX() - 1);
			}
		}, element2Layer);
		move2.start();
	}
	if(bondType == 'IB')
	{
		element1Layer.destroyChildren();
		element1Layer.clear();
		element2Layer.destroyChildren();
		element2Layer.clear();
		updateStructure(pickedElements['first'],pickedElements['second']);
		if(elementType[pickedElements['first']] == 'M')
		{
			let arrow = new Konva.Arrow({
			  points: [550,150, 800, 150],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulationLayer.add(arrow).draw();
			let nameText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 50,
				text: 'Name : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let nameTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 50,
				text: elementName[pickedElements['first']] + ' '  + elementName[pickedElements['second']],
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 20,
				text: 'Result : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 20,
				text: results,
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			namingLayer.add(nameText).draw();
			namingLayer.add(nameTextResult).draw();
			namingLayer.add(resultText).draw();
			namingLayer.add(resultTextResult).draw();
		}
		else
		{
			let arrow = new Konva.Arrow({
			  points: [800,150, 550, 150],
			  pointerLength: 20,
			  pointerWidth : 20,
			  fill: 'black',
			  stroke: 'black',
			  strokeWidth: 4
			});
			simulationLayer.add(arrow).draw();
			let nameText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 50,
				text: 'Name : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let nameTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 50,
				text: elementName[pickedElements['second']] + ' '  + elementName[pickedElements['first']],
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultText = new Konva.Text({
				x: (width / 2) - 400,
				y: (height / 2) - 20,
				text: 'Result : ',
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			let resultTextResult = new Konva.Text({
				x: (width / 2) - 290,
				y: (height / 2) - 20,
				text: results,
				fontSize: 30,
				fontFamily: 'Arial',
				fill: 'black'
			});
			namingLayer.add(nameText).draw();
			namingLayer.add(nameTextResult).draw();
			namingLayer.add(resultText).draw();
			namingLayer.add(resultTextResult).draw();
		}
	}
	if(bondType == 'MB')
	{
		let nameText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 50,
			text: 'Name : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let nameTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 50,
			text: 'No Result',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultText = new Konva.Text({
			x: (width / 2) - 400,
			y: (height / 2) - 20,
			text: 'Result : ',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		let resultTextResult = new Konva.Text({
			x: (width / 2) - 290,
			y: (height / 2) - 20,
			text: 'No Bonding',
			fontSize: 30,
			fontFamily: 'Arial',
			fill: 'black'
		});
		namingLayer.add(nameText).draw();
		namingLayer.add(nameTextResult).draw();
		namingLayer.add(resultText).draw();
		namingLayer.add(resultTextResult).draw();
	
	}
});
var backgroundBox1 = new Konva.Rect({
	x: 0,
	y: 0,
	width: width - 1100,
	height: height,
	fill: 'black',
	cornerRadius: 5
});
var backgroundBox2 = new Konva.Rect({
	x: width - 300,
	y: 0,
	width: width - 1000,
	height: height,
	fill: 'black',
	cornerRadius: 5
});
backgroundLayer.add(backgroundBox1).draw();
backgroundLayer.add(backgroundBox2).draw();
var logo = new Konva.Image({
	x: width - 180,
	y: 0 + 20,
	width: 90,
	height: 90,
});
var logoText = new Konva.Text({
	x: width - 210,
	y: 0 + 110,
	text: 'B O N D S',
	fontSize: 30,
	fontFamily: 'Arial',
	fill: 'white'
});
logoLayer.add(logo);
logoLayer.add(logoText);
var logoImage = new Image();
logoImage.onload = function() {
	logo.image(logoImage);
	logoLayer.draw();
};
var unstableIndicator = new Konva.Rect({
	x: (width / 2) - 40,
	y: (height / 2) + 200,
	width: 80,
	height: 20,
	fill: 'red',
	cornerRadius: 5
});
var stableIndicator = new Konva.Rect({
	x: (width / 2) - 40,
	y: (height / 2) + 140,
	width: 80,
	height: 20,
	fill: 'blue',
	cornerRadius: 5
});
var stableIndicatorText = new Konva.Text({
	x: (width / 2) - 27,
	y: (height / 2) + 165,
	text: 'Stable',
	fontSize: 20,
	fontFamily: 'Arial',
	fill: 'black'
});
var unstableIndicatorText = new Konva.Text({
	x: (width / 2) - 40,
	y: (height / 2) + 225,
	text: 'Unstable',
	fontSize: 20,
	fontFamily: 'Arial',
	fill: 'black'
});
colorIndicatorLayer.add(unstableIndicator).draw();
colorIndicatorLayer.add(stableIndicator).draw();
colorIndicatorLayer.add(unstableIndicatorText).draw();
colorIndicatorLayer.add(stableIndicatorText).draw();
logoImage.src = 'images/flasks.png';
stage.add(backgroundLayer,layer,newlayer,buttonLayer,arrowLayer,element1Layer,element2Layer,statusLayer,analytics1Layer,analytics2Layer,
simulateLayer,elementProfileLayer,logoLayer,simulationLayer,bondLayer,namingLayer,colorIndicatorLayer);