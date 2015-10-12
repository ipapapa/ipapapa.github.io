//----------DHTML Menu Created using AllWebMenus PRO ver 4.2-#658---------------
//C:\apache2triad\htdocs\giannis\menu.awm
var awmMenuName='menu';
var awmLibraryBuild=658;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1)));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","&#39;");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmUseTrs=0;
var awmSepr=["0","","",""];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["bb.jpg",124,21];
awmCreateCSS(0,1,0,n,'#FFFFFF',n,n,n,'outset',2,'#C0C0C0',0,0);
awmCreateCSS(1,2,0,'#FFFFFF','#FFFFFF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',1);
awmCreateCSS(0,2,0,'#F6E80A','#7A96DF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',1);
awmCreateCSS(1,2,0,'#FFFFFF','#FFFFFF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',0);
awmCreateCSS(0,2,0,'#F6E80A','#7A96DF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',0);
awmCreateCSS(1,2,0,'#000000','#FFFFFF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',1);
awmCreateCSS(0,2,0,'#FFFFFF','#7A96DF',n,'bold 14px Verdana',n,'outset',1,'#808080','2px 0px 2px 0',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,3,230,0,0,0,0,1,0,n,n,100,0,0,3,230,0);
it=s0.addItemWithImages(1,2,2,"Home Page",n,n,"",n,n,n,3,3,3,n,n,n,"index.htm",n,n,n,"index.htm",n,0,0,2,0,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"Publications",n,n,"",n,n,n,3,3,3,n,n,n,"publications.htm",n,n,n,"publications.htm",n,0,0,2,0,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"Projects",n,n,"",n,n,n,3,3,3,n,n,n,"projects.htm",n,n,n,"projects.htm",n,0,0,2,0,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"Contact",n,n,"",n,n,n,3,3,3,n,n,n,"Contact.htm",n,n,n,"Contact.htm",n,0,0,2,0,0,0,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"Links",n,n,"",n,n,n,3,3,3,n,n,n,"links.htm",n,n,n,"links.htm",n,0,0,2,0,0,0,n,n,n,0,0,0,0);
s0.pm.buildMenu();
}}
