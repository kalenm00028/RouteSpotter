<head>
  <title>Dice Roller</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="Routespotter.css">
  <script type="text/javascript" src="RouteSpotter.js"></script>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>

<body>
	<BR>
	<form style="text-align:center; margin:auto;">
	  	<input type="button" value="Home Screen" onClick="parent.location='index.html'">
	  	<input type="button" value="Races" onClick="parent.location='races.html'">
	  	<input type="button" value="Classes" onClick="parent.location='classes.html'">
	    <input type="button" value="Ability Scores" onClick="parent.location='diceRoller.html'">
	  	<input type="button" value="Skills" onClick="parent.location='skills.html'">
	    <input type="button" value="Feats" onClick="parent.location='feats.php'">
	 </form>
	<?php
		$user = 'root';
		$pass = '';
		$database = 'routespotter';
		$db = new mysqli('localhost', $user, $pass, $database);
		if(!$db) {
			die("Connection failed");
		}
		$sql = "SELECT id,name,description FROM feats";
		$result = mysqli_query($db, $sql);

		if (!$result) {
			echo 'MySQL Error';
		}
	?>
	<table>
		<tr>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">Id</td>
			<td style="border:1px solid black;">Feat</td>
			<td style="border:1px solid black;">description</td>
		</tr>
		<?php
		    while($row = mysqli_fetch_assoc($result)) {
		        echo "<tr>";
		        echo "<td><input type='checkbox'></td>";
		        echo "<td>".$row['id']."</td>";
		        echo "<td>".$row['name']."</td>";
		        echo "<td>".$row['description']."</td>";
		        echo "</tr>";
		    }

		?>
	</table>

</body>