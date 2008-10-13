function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;




if (document.images) 
{
   img1 = new Image();


   img1.src = "http://www.milanogw.net/textpattern/images/bg_thumbs_on.gif";
    
}

