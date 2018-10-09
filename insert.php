<?php
	$server = "localhost";
	$dbUsername = "root";
	$dbPassword = "";
	$database = "bonds";
	$connect = new mysqli($server, $dbUsername, $dbPassword, $database);

	if ($connect->connect_error)
	{
		die("Database Connection Failed:" . $connect->connect_error);
	}
	
	$first = $_GET['first'];
	$second = $_GET['second'];
	$result = $_GET['result'];
	$firstArray = array();
	$secondArray = array();
	$resultArray = array();
	$stmt = $connect->prepare("INSERT INTO results(FirstElement, SecondElement, Result) VALUES (?,?,?)");
	$stmt->bind_param("sss",$first,$second,$result);
    $stmt->execute();
	
	$stmt2 = $connect->prepare("SELECT * FROM results");
    if($stmt2->execute())
	{
		$result = $stmt2->get_result();
		while($row = $result->fetch_array(MYSQLI_ASSOC))
		{
			array_push($firstArray,$row['FirstElement']);
            array_push($secondArray,$row['SecondElement']);
			array_push($resultArray,$row['Result']);
		}
	}

?>
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.rawgit.com/konvajs/konva/2.4.0/konva.min.js"></script>
  <meta charset="utf-8">
  <title>B O N D S</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #F0F0F0;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  <script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    var firstData = <?php echo json_encode($firstArray); ?>;
	var secondData = <?php echo json_encode($secondArray); ?>;
	var resultData = <?php echo json_encode($resultArray); ?>;
	var stable;
	var unstable;
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });
	var layer = new Konva.Layer();
	var logoLayer = new Konva.Layer();
	var analyticsLayer = new Konva.Layer();
	var arrowLayer = new Konva.Layer();
	var backgroundLayer = new Konva.Layer();
	function getStableCount(data)
	{
		let Count = 0;
		for(let i = 0;i < data.length;i++)
		{
			if(data[i] == 'Stable')
			{
				Count += 1;
			}
		}
		return Count;
	}
	function getUnstableCount(data)
	{
		let Count = 0;
		for(let i = 0;i < data.length;i++)
		{
			if(data[i] == 'Unstable')
			{
				Count += 1;
			}
		}
		return Count;
	}
	stable = getStableCount(resultData);
	unstable = getUnstableCount(resultData);
	console.log(stable);
	console.log(unstable);
	analytics(stable,unstable);
	function analytics(stable, unstable)
	{
		let percent = Math.round((stable / (stable + unstable)) * 100);
		let unPercent = 100 - percent;
		let unstalbeWedge = new Konva.Wedge({
		  x: 1050,
		  y: 200,
		  radius: 100,
		  angle: 360,
		  fill: 'red',
		  rotation: 0
		});
		let stableWedge = new Konva.Wedge({
		  x: 1050,
		  y: 200,
		  radius: 100,
		  angle: 360 * (stable / (stable + unstable)),
		  fill: 'blue',
		  rotation: 180
		});
		let unstableColor = new Konva.Rect({
			x: 850 + 120,
			y: 600 - 250,
			width: 30,
			height: 10,
			fill: 'red',
			stroke: 'white',
			strokeWidth: 2,
			cornerRadius: 5
		});
		let stableColor = new Konva.Rect({
			x: 950 + 120,
			y: 600 - 250,
			width: 30,
			height: 10,
			fill: 'blue',
			stroke: 'white',
			strokeWidth: 2,
			cornerRadius: 5
		});
		let stablePercentageText = new Konva.Text({
			x: 950 + 40 + 120,
			y: 600 - 5 - 250,
			text: percent + '%',
			fontSize: 20,
			fontFamily: 'Arial',
			fill: 'white'
		});
		let stableUnstableText = new Konva.Text({
			x: 850 + 40 + 120,
			y: 600 - 5 - 250,
			text: unPercent + '%',
			fontSize: 20,
			fontFamily: 'Arial',
			fill: 'white'
		});
		var unstableIndicator = new Konva.Rect({
			x: (width / 2) + 550,
			y: (height / 2) - 150,
			width: 80,
			height: 20,
			fill: 'red',
			cornerRadius: 5
		});
		var stableIndicator = new Konva.Rect({
			x: (width / 2) + 100,
			y: (height / 2) - 150,
			width: 80,
			height: 20,
			fill: 'blue',
			cornerRadius: 5
		});
		var stableIndicatorText = new Konva.Text({
			x: (width / 2) + 115,
			y: (height / 2) - 125,
			text: 'Stable',
			fontSize: 20,
			fontFamily: 'Arial',
			fill: 'white'
		});
		var unstableIndicatorText = new Konva.Text({
			x: (width / 2) + 550,
			y: (height / 2) - 125,
			text: 'Unstable',
			fontSize: 20,
			fontFamily: 'Arial',
			fill: 'white'
		});
		analyticsLayer.add(unstableIndicator).draw();
		analyticsLayer.add(stableIndicator).draw();
		analyticsLayer.add(stableIndicatorText).draw();
		analyticsLayer.add(unstableIndicatorText).draw();
		analyticsLayer.add(unstableColor).draw();
		analyticsLayer.add(stableColor).draw();
		analyticsLayer.add(stablePercentageText).draw();
		analyticsLayer.add(stableUnstableText).draw();
		analyticsLayer.add(unstalbeWedge).draw();
		analyticsLayer.add(stableWedge).draw();
	}
	function change(start,end)
	{
		var row = 0;
		var column = 150;
		var count = 0;
		var space = 70;
		for(var i = start;i < end; i++)
		{
			if(i == firstData.length)
			{
				break;
			}
			let numberText = new Konva.Text({
				x: row + 100,
				y: column,
				text: i+1,
				fontSize: 18,
				fontFamily: 'Arial',
				fill: 'white',
			});
			let firstText = new Konva.Text({
				x: row + 200 ,
				y: column,
				text: firstData[i],
				fontSize: 18,
				fontFamily: 'Arial',
				fill: 'white',
			});
			let secondText = new Konva.Text({
				x: row + 400,
				y: column,
				text: secondData[i],
				fontSize: 18,
				fontFamily: 'Arial',
				fill: 'white',
			});
			let resultText = new Konva.Text({
				x: row + 600,
				y: column,
				text: resultData[i],
				fontSize: 18,
				fontFamily: 'Arial',
				fill: 'white',
			});
			layer.add(numberText).draw();
			layer.add(firstText).draw();
			layer.add(secondText).draw();
			layer.add(resultText).draw();
			column += 40;
		}
	}
	change(0,10);
	
	var logo = new Konva.Image({
        x: 30,
        y: 0 + 30,
        width: 90,
        height: 90,
		offset: {
			x: 10,
			y: 20
		}
    });
	var logoText = new Konva.Text({
		x: 130,
		y: 0 + 50,
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
	logo.on('mouseover', function(evt) {
        var shape = evt.target;
        document.body.style.cursor = 'pointer';
        shape.scaleX(1.2);
		shape.scaleY(1.2);
        logoLayer.draw();
    });
    logo.on('mouseout', function(evt) {
        var shape = evt.target;
        document.body.style.cursor = 'default';
        shape.scaleX(1);
		shape.scaleY(1);
        logoLayer.draw();
    });
	logo.on('click', function() {
		window.location.replace("index.php");
    });
	logoImage.src = 'images/flasks.png';
	var nextArrow = new Konva.Arrow({
      x: 210 + 270,
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
      x: 50 + 270,
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
	var indicator = 0;
	arrowLayer.on('click', function(evt) {
		var shape = evt.target;
		if(shape)
		{
			if(shape.getAttr('id') == 0)
			{
				if(indicator + 9 >= firstData.length)
				{
				}
				else
				{
					layer.destroyChildren();
					layer.clear();
					indicator += 9;
					change(indicator,indicator+10);
				}
			}
			if(shape.getAttr('id') == 1)
			{
				layer.destroyChildren();
				layer.clear();
				if(indicator <= 0)
				{
					indicator = 0;
				}
				else
				{
					indicator -= 9;
				}
				change(indicator,indicator+10);
			}
		}
	});
	var backgroundBox1 = new Konva.Rect({
		x: 0,
		y: 0,
		width: width,
		height: height,
		fill: 'black',
		cornerRadius: 5
	});
	backgroundLayer.add(backgroundBox1).draw();
	stage.add(backgroundLayer,layer,logoLayer,analyticsLayer,arrowLayer);
  </script>

</body>
</html>