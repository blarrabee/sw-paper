function Search(){
	var a;var c=document.getElementById("searchInput").value.toUpperCase();
	var b=document.getElementById("searchOL").getElementsByTagName("li");
		for(a=0;a<b.length;a++){var d=b[a].getElementsByTagName("a")[0];
			-1<d.textContent.toUpperCase().indexOf(c)?b[a].style.display="":b[a].style.display="none"}}var ol=document.getElementById("searchOL");
ol.onclick=function(a){a=a.target;"erc20"===a.className&&(""===location.hostname?window.location.replace("ethereum.html?"+a.textContent):window.location.replace("ethereum?"+a.textContent))};