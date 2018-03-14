<table border="0" cellpadding="0" cellspacing="0" width="850">
	<tr align="center"> 
		<td id="sidemenu" width="25%" align="center" valign="top" rowspan="2">
        	<br />
        	<b><u>ANNOUNCEMENTS:</u></b>
            <br />
            The site is undergoing changes and updates, is you find any broken links, please <a href="mailto:sparcwebmaster@gmail.com">email</a> me
            <br />
            <br />
			<img src="images/divider.jpg" alt="---------------" />
			<br />
			<br />
        	<?php include("calendarFile.php") ?>
            <?php
			$time - time();
			echo generate_calendar(2008, 8, NULL, 3);
			?>
		</td>