<head>
  <title>Spells</title>
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
	<button id="save">Accept These Spells</button>
	<div style="text-align:center;">
	  	 <input type="button" value="Continue" onclick="window.location.href='display.html'">
	</div>
	<?php
		$user = 'root';
		$pass = '';
		$database = 'routespotter';
		$db = new mysqli('localhost', $user, $pass, $database);
		if(!$db) {
			die("Connection failed");
		}
		$sql = "SELECT name,school,spell_level,description FROM spells";
		$result = mysqli_query($db, $sql);
	?>
	<table style="margin: 100px;" class="spellsTable" id="spellsTable">
		<tr style="border:1px solid black;">
			<td class = 'tableNames'></td>
			<td class = 'tableNames'>Spell Name</td>
			<td class = 'tableNames'>School</td>
			<td class = 'tableNames'>Spell Level</td>
			<td class = 'tableNames'>Description</td>
		</tr>
		<?php
			$sql = "SELECT name,school,spell_level,description FROM spells";
			error_reporting(E_ALL ^ E_NOTICE);
		    while($row = mysqli_fetch_assoc($result)) {
		    	$class = ($i == 0) ? "mainFeats" : "altFeats";
		        echo "<tr class=\"".$class."\">";
		        echo "<td class = 'desc' style='padding: 10px;'><input type='checkbox'></td>";
		        echo "<td class = 'desc'><p>".$row['name']."</p></td>";
		        echo "<td class = 'desc'>".$row['school']."</td>";
		        echo "<td class = 'desc'>".$row['spell_level']."</td>";
		        echo "<td class = 'desc'>".$row['description']."</td>";
		        echo "</tr>";
		        $i = ($i==0) ? 1:0;
		    }
		?>
	</table>
	<script type="text/javascript">
		$('#save').click(function () {
			var spellList = "";
			var numberOfCheckboxes = $("input:checkbox:checked").length;
		    $('#spellsTable').find('tr').each(function () {
		        var row = $(this);
		        if (row.find('input[type="checkbox"]').is(':checked')) {
		        	if (numberOfCheckboxes > 1) {
		        		spellList += (row.find('p').text() + "|| ");
		        		numberOfCheckboxes--;
		        	}
		        	else {
			        	spellList += (row.find('p').text());
			        }
		        }
		    });
		    console.log(spellList);
    		var t = $(document).find("title").text();
	        var c = spellList;
	        createCookie(t, c, 7);
		});
	</script>
</body>