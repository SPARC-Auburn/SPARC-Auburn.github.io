<?php include("header.php") ?>
<?php include("sidemenu.php") ?>
		<td id="infoWindow" align="justify" valign="top" rowspan="3" colspan="2">
		<blockquote>
		I feel that is appropriate that I write a Midterm Summary of all that is 
		going on in the SPaRC program as on now.
		<br />
		<br />
******************** Competitive Robotics Team ********************<br />
<br />
-  There are around five more things to be done mechanically:
<ul>
    <li>Add a deflector to the front of the robot to allow the us to pick up a block 
    even if we are not lined up perfectly</li>
    	<ul>
        <li>This should be done by Monday night</li>
        </ul>
    <li>Redesign the LRF case to provide more rigid protection from collision with 
    another robot</li>
    	<ul>
        <li>Zach did a great job on the first LRF case, but there is room for 
         improvement</li>
        </ul>
    <li>Implement block management system in storage area.</li>
    <li>Create parts list</li>
    <li>Wire Management</li>
</ul>
   Everything else in the mechanical world looks good:  The batteries are mounted as 
   low possible, the block acquisition system works well at 75% speed, chassis looks 
   good, plenty of room still on the second level, drive train works well, all the 
   sensors have been mounted except the camera.<br />
<br />
-  There is a lot more to be done in the control world:
<ul>
    <li>George's turn radius (Shortest Path) with priorities needs to be implemented 
    in code</li>
    <li>A virtual map of the playing field needs to be generated</li>
    	<ul>
         <li>William and Michael worked on this Friday night and made a great 
         deal of headway</li>
         </ul>
    <li>Turn LRF data into block positions and wall positions</li>
    <li>Events/States need to be created and inserted into Luke's control code</li>
    <li>Speed control needs to be done for various cases:</li>
    	<ul>
         <li>I will be working on the speed control for approaching blocks in the next 
         few days</li>
         <li>for turning</li>
         <li>for stopping</li>
         <li>for malicious ramming of opposition</li>
         </ul>
    <li>Camera image processing with block position and wall positions</li>
    <li>Insert our position into the virtual map of the playing field</li>
    	<ul>
         <li>with sonar</li>
         <li>with LRF</li>
         <li>with camera</li>
         </ul>
    <li>Insert the block positions in the virtual map of the playing field</li>
    	<ul>
         <li>with LRF</li>
         <li>with camera</li>
         </ul>
    <li>Use RFID to verify that the block was picked up</li>
</ul>
  The sensors all seem to be working very well: Michael got the sonar working as 
  needed, William got the LRF working at a  rate of roughly a complete scan every 25 ms 
  or less, John's edge detection seems to be working well and is currently working on 
  recognizing blocks, Luke has setup and tested the state machine and I believe he is 
  ready to start inserting states/events <br />
<br />
In Summation:  Due to the great amount of work to be done in the next three weeks I 
am suggesting that the competitive robotics team meet at least four times a week AS A 
TEAM until the competition.  The hours we will meet will be after school hours so the 
co-ops can attend.  Currently I plan on having us meet:<br />
<br />
Sunday at 3pm<br />
Monday at 8pm<br />
Wednesday at 8pm<br />
Friday at 6pm<br />
<br />
<br />
******************************************************************<br />
<br />
***************************Tourbot Team***************************<br />
<br />
I hope that in the next week I can get with Linda to move the "big gray thing" in the 
lab so that we can set up a home for tourbot.  Currently the tourbot weekly meeting 
is held at 7pm on Mondays so please spread the word to anyone that you think might be 
interested.  The mailing list has been silent so I am worried.  Has anyone started to 
do research?<br />
<br />
Locomotion:
<ul>
 <li>I have not gotten a chance to sit down with Dr. Hung to discuss the use of the 
 Segways in his possession,  I hope to get that done this week.</li>
 </ul>
Mechanical assesories:
<ul>
 <li>Last week at the meeting we discussed that we would like to have the following on 
 the robot:</li>
 	<ul>
      <li>A robotic arm and hand</li>
      <li>A projector</li>
      <li>An animatronic head with moving eyes and mouth: (maybe even eyebrows)</li>
      		<ul>
            <li>I believe I will lead this effort</li>
            </ul>
      <li>A torso-like case to hold all the internal electronics</li>
      		<ul>
            <li>We were thinking of something along the lines of a mannequin torso 
            hollowed out</li>
            </ul>
	</ul>
</ul>
Control:
<ul>
 <li>I think we will be using a motherboard for general control purposes:</li>
 		<ul>
      <li>Set up a virtual map of each floor in the building</li>
      		<ul>
            <li>Document the position of every exit sign ( to navigate by)</li>
            </ul>
      <li>Place position of robot into map with</li>
      		<ul>
            <li>With sonar</li>
            <li>With Camera</li>
            <li>With Ground Tracking (reconfigured computer mice)</li>
			</ul>
		</ul>
</ul>
I hope that we can get a dialog going on the mailing list about what equipment 
specifically we should use.  We also need someone to step up and start making a 
project schedule, preferably with Gantt Project.  I will be happy to teach anyone 
the ins and outs of Gantt Project, it would only take about fifteen minutes to teach.<br />
<br />
*******************************************************************<br />
<br />
Sent by Sam Misko on March 9, 2008	
</blockquote>
		</td>
	</tr>
	<tr>
		<td></td>
<?php include("footer.php") ?>