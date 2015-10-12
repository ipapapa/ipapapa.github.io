<!-- Begin POP-UP SIZES AND OPTIONS CODE


// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES FOR THE GALLERY IMAGE VIEWING


var slideshow_button 	= "yes"		// SLIDESHOW BUTTON yes/no
var close_button 	= "yes"		// CLOSE BUTTON yes/no
var right_click_on	= "yes"		// POPUP RIGHT CLICK PROTECTION ON
var border_color	= "000000"	// PICTURE OUTLINE COLOR
var background_color	= "FFFFFF"	// VIEWER BACKGROUND COLOR
var viewer	 	= "no"		// yes/FULL SCREEN OR no/POPUP MODE

var zoom	 	= "yes"		// SHOW POPUP ZOOM LINKS
var right_click_text	= "You may not right mouse click this page"	// TEXT FOR THE RIGHT CLICK PROTECTION


// THESE OPTIONS DO NOT WORK IN FULL SCREEN MODE
var view_width 		= 700		// GALLERY POPUP WIDTH
var view_height 	= 525		// GALLERY POPUP HEIGHT
var slideshow_width 	= 700		// SLIDESHOW POPUP WINDOW WIDTH
var slideshow_height 	= 525		// SLIDESHOW POPUP WINDOW HEIGHT
var FAQ_width 		= 400		// FAQ WINDOW WIDTH
var FAQ_height 		= 500		// FAQ WINDOW HEIGHT




// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2004 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// START IMAGE VIEWER CODE







function popUp(URL) {
   if (viewer == "no") {
var look='toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+view_width+',height='+view_height+','
popwin=window.open("","",look)
}
else 
if (viewer == "yes") {
popwin=window.open("","")
}
popwin.document.open()
popwin.document.write('<html><head><title>Picture Close Up</title>')
popwin.document.write('<link rel=StyleSheet href="coolstyle.css" type="text/css" media="screen">')
   if (right_click_on == "yes") {
popwin.document.write('<META HTTP-EQUIV="imagetoolbar" CONTENT="no">')
popwin.document.write('<script language="JavaScript">')
popwin.document.write('function noRightClick() {')
popwin.document.write('if (event.button==2) {')
popwin.document.write('alert(\''+right_click_text+'\')')
popwin.document.write('}')
popwin.document.write('}')
popwin.document.write('document.onmousedown=noRightClick')
popwin.document.write('</script>')
}
popwin.document.write('</head>')
popwin.document.write('<body bgcolor="#'+background_color+'" leftmargin="0" rightmargin="0" topmargin="0" bottommargin="0" marginheight="0" marginwidth="0">')
popwin.document.write('<TABLE cellpadding=0 cellspacing=0 border=0 width="100%" height="100%" ><tr><td align="center">')
// ZOOM CODE
   if (zoom == "yes") {
browser_version= parseInt(navigator.appVersion);
browser_type = navigator.appName;
if (browser_type == "Microsoft Internet Explorer" && (browser_version >= 4) && (navigator.userAgent.indexOf("Windows") != -1)) {
popwin.document.write("<div id=\"ZOOM\">");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='1.5'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-1.gif\" border=\"0\"></a>");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='2.0'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-2.gif\" border=\"0\"></a>");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='2.5'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-3.gif\" border=\"0\"></a>");
popwin.document.write("</div>");
}}
popwin.document.write('<TABLE cellpadding="0" cellspacing="0" border="1" bordercolor="#' + border_color + '" style="border-collapse: collapse"><tr><td>')
popwin.document.write('<img src="'+URL+'" name="show"><br>')
popwin.document.write('</td></tr></table>')
popwin.document.write('<br>')
popwin.document.write('<TABLE cellpadding="0" cellspacing="0" border="0"><tr><td>')
   if (close_button == "yes") {
popwin.document.write('<form style="margin: 0px"><input type="button" value="Close" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" class="button-popups" onClick=\'self.close()\'>&nbsp;</form>')
}
   if (slideshow_button == "yes") {
popwin.document.write('</td><td>')
popwin.document.write('<form action="slideshow.htm" style="margin: 0px"><input type="submit" value="Slideshow" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" class="button-popups"></form>')
}
popwin.document.write('</td></tr></table>')
popwin.document.write('</td></tr></table>')
popwin.document.write('</body>')
popwin.document.close()
}


// START SLIDESHOW POPUP CODE










function popUpSlideshow(URL) {
day = new Date();
id = day.getTime();

   if (viewer == "no") {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+slideshow_width+',height='+slideshow_height+'');");
}
else 
if (viewer == "yes") {
eval("page" + id + " = window.open(URL);");
}
}




// START FAQ POPUP


function popUpFAQ(URL) {
day = new Date();
id = day.getTime();

   if (viewer == "no") {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+FAQ_width+',height='+FAQ_height+'');");
}
else 
if (viewer == "yes") {
eval("page" + id + " = window.open(URL);");
}
}








//  End -->