<?php include("../header.php") ?>
<?php include("../sidemenu.php") ?>
		<td id="infoWindowCal" align="justify" rowspan="3" colspan="1" width="200">
        <center>
        <a href="http://sparc.eng.auburn.edu/SECON/SECONcalAug.php">August 2008</a>
        <br />
        <a href="http://sparc.eng.auburn.edu/SECON/SECONcalSept.php">September 2008</a>
        <br />
        <a href="http://sparc.eng.auburn.edu/SECON/SECONcalOct.php">October 2008</a>
        <br />
        <a href="http://sparc.eng.auburn.edu/SECON/SECONcalNov.php">November 2008</a>
        <br />
        <a href="http://sparc.eng.auburn.edu/SECON/SECONcalDec.php">December 2008</a>
        <br />
        </center>
        </td>
		<td id="infoWindow" align="justify" rowspan="3" colspan="1">
        	<center>
            <h4>IEEE SouthEast Conference Robotics December Calender</h4>
            <br />
			<?php include("../calendarFile.php") ?>
            <?php
			$time = time();
			// $days = array(
		    //	2 => array('/index.php','linked-day'),
			//);
			echo generate_calendar(2008, 12, NULL, 3);
			?>
            </center>
		</td>
	</tr>
	<tr>
	<td></td>
<?php include("../footer.php") ?>