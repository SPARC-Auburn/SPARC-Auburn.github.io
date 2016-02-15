// General site-wide functions for display and navigation

// Show the dropdown menu
function dropdownDisplay(obj)
{
	document.getElementById(obj).style.display = "block";
	document.getElementById(obj).style.zIndex = 2280;
}

// Hide he dropdown menu
function dropdownHide(obj)
{
	//setTimeout('hideObject(\''+obj+'\')',1000);
	document.getElementById(obj).style.display = "none";
}

// Actually hide the object
function hideObject(obj)
{
	document.getElementById(obj).style.display = "none";
}

// Display/toggle hidden objects
function displayInfo(obj)
{
	var type = document.getElementById(obj).style.display;
	if (type == 'block')
		document.getElementById(obj).style.display = "none";
	else
		document.getElementById(obj).style.display = "block";
}

// Adds in the extra content needed for the video popup; homepage only
function watchVideo() 
{
	// Load this javascript
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'swfobject.js';
	document.getElementsByTagName('head')[0].appendChild(script);  
	
	// Toggle these HTML elements on/off
	displayInfo('watchVideo');
	displayInfo('videoContainer');
	// Do we need to change the body?
	if (document.getElementById('watchVideo').style.display == "block")
	{
		if (self.innerWidth)
		{
			windowHeight = self.innerHeight;
		}
		else if (document.documentElement && document.documentElement.clientWidth)
		{
			windowHeight = document.documentElement.clientHeight;
		}
		else if (document.body)
		{
			windowHeight = document.body.clientHeight;
		}
		// Is the window too small?
		if (windowHeight < 550)
		{
			document.body.style.height = "550px";
		}
		else if (windowHeight > 550)
		{
			document.body.style.height = "100%";
			document.body.style.overflow = "hidden";
		}
	}
	else
	{
		document.body.style.height = "auto";
		document.body.style.overflow = "visible";
	}
	// Add in the content
	var videoContent = "<div id=\"videoContainer2\">";
	videoContent += "<div id=\"closeVideo\"><a href=\"javascript:watchVideo();\">Close <span>[x]</a></span></div>";
	videoContent += "<h2 id=\"videoTitle\">Now Viewing: Team 228 Documentary Video</h2>";
	
	//videoContent += "<div id=\"videoEmbed\"><object type=\"application/x-shockwave-flash\" data=\"FlowPlayerThermo.swf\" width=\"400\" height=\"300\" id=\"FlowPlayer\"><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"movie\" value=\"FlowPlayerThermo.swf\" /><param name=\"quality\" value=\"high\" /><param name=\"scaleMode\" value=\"showAll\" /><param name=\"allowfullscreen\" value=\"true\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"allowNetworking\" value=\"all\" /><param name=\"flashvars\" value=\"config={ autoPlay: true, loop: false, initialScale: 'scale',showLoopButton: false,showPlayListButtons: false,showMenu: false,baseURL: 'http://arthurdutra/team228/',useNativeFullScreen: true,playList: [{ url: 'video/2005/team-promo-video.flv' }]}\" /></object></div>";
	videoContent += "<div id=\"videoEmbed\">"; //<embed src=\"http://www.team228.org/video/2008/10-Years-of-Contagious-Enthusiasm.mp4\" width=\"400\" height=\"250\" autoplay=\"true\" scale=\"tofit\"></div>\n";
		
	videoContent += "<embed src=\"mediaplayer.swf\" width=\"576\" height=\"320\" allowscriptaccess=\"always\" allowfullscreen=\"true\"";
	videoContent += "flashvars=\"height=320&width=576&file=video/2008/website-intro.flv&image=images/uploaded/gus-vision-intro_07142007.jpg&backcolor=0x444444&frontcolor=0xFFFFFF\"";
	videoContent += "/></div>";
	
	//videoContent += "<div id=\"videoDesc\"><p><b>Description:</b> This short film looks back Team 228's first ten years, from 1999-2008, and all our accomplishments from those years; an extended version of this video will be coming when we film enough video of the 2008 season.</p></div>";
	videoContent += "<div id=\"videoFullscreen\">Video by Gus Robotics Team 228. Some rights reserved. <a href=\"javascript:watchVideo();\" class=\"newWindow\">Return to homepage</a></div>";
	videoContent += "</div>";
	document.getElementById('videoContainer').innerHTML = videoContent;
}

// This function makes the search bar easier to use when clicked on
function unlockSearch(element) 
{
	element.style.color = "#000";
	if (element.value == "Search our website!" || element.value == "Search our galleries!" || element.value == "Search our news!"  || element.value == "Search")
		element.value = "";
}
