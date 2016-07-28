<head>
  <title>Feats</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="Routespotter.css">
  <script type="text/javascript" src="Routespotter.js"></script>
  <!--<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>

<body>
	<BR>
	<div class='nav' id='navItems' onclick='navClick()'>&#9776;</div>
	<?php
		error_reporting(0);
		$user = 'root';
		$pass = '';
		$database = 'routespotter';
		$db = new mysqli('localhost', $user, $pass, $database);
		if(!$db) {
			die("Connection failed");
		}
		$sql = "SELECT name,type, description,benefit,prereq FROM feats2";

		if ($_GET['sort'] == 'name') {
			$sql .= " ORDER BY name";
		}
		elseif ($_GET['sort'] == 'type') {
			$sql .= " ORDER BY type";
		}

		$result = mysqli_query($db, $sql);

		if (!$result) {
			echo 'MySQL Error';
		}
	?>
	<button id="save">Accept These Feats</button>
	</br>
	<div style="text-align:center;">
	  	 <input type="button" value="Continue" onclick="window.location.href='spells.php'">
	</div>
	<table style="margin: 100px;" class="featsTable" id="featsTable">
		<tr style="border:1px solid black;">
			<td class = 'tableNames'></td>
			<td class = 'tableNames'><a href="feats.php?sort=name" style="color:black;">Feat <span style="font-size:75%">&#9660/&#9650</span></td>
			<td class = 'tableNames'><a href="feats.php?sort=type" style="color:black;">Type <span style="font-size:75%">&#9660/&#9650</span></td>
			<td class = 'tableNames'>Description</td>
			<td class = 'tableNames'>Prerequisites</td>
			<td class = 'tableNames'>Benefit</td>
		</tr>
		<?php
			error_reporting(E_ALL ^ E_NOTICE);
		    while($row = mysqli_fetch_assoc($result)) {
		    	$class = ($i == 0) ? "mainFeats" : "altFeats";
		        echo "<tr class=\"".$class."\">";
		        echo "<td class = 'desc' style='padding: 10px;'><input type='checkbox'></td>";
		        echo "<td class = 'desc'><p>".$row['name']."</p></td>";
		        echo "<td class = 'desc'>".$row['type']."</td>";
		        echo "<td class = 'desc'>".$row['description']."</td>";
		        echo "<td class = 'desc'>".$row['prereq']."</td>";
		        echo "<td class = 'desc'>".$row['benefit']."</td>";
		        echo "</tr>";
		        $i = ($i==0) ? 1:0;
		    }
		?>
	</table>
	<script type="text/javascript">
		$('#save').click(function () {
			var featList = "";
			var numberOfCheckboxes = $("input:checkbox:checked").length;
		    $('#featsTable').find('tr').each(function () {
		        var row = $(this);
		        if (row.find('input[type="checkbox"]').is(':checked')) {
		        	if (numberOfCheckboxes > 1) {
		        		featList += (row.find('p').text() + "|| ");
		        		numberOfCheckboxes--;
		        	}
		        	else {
			        	featList += (row.find('p').text());
			        }
		        }
		    });
		    console.log(featList);
    		var t = $(document).find("title").text();
	        var c = featList;
	        createCookie(t, c, 7);
		});
	</script>
</body>