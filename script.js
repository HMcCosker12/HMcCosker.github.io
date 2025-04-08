		function openPage(pageNum, elmnt, color) {
			var i, pagecont, pagelinks;
			
			pagecont = document.getElementsByClassName("pagecont")
			for (i=0; i < pagecont.length; i++) {
					pagecont[i].style.display = "none";
			}
				
			pagelinks = document.getElementsByClassName("pagelink");
                        for (i=0; i < pagelinks.length; i++) {
                                pagelinks[i].style.backgroundColor = "";
                       }
                                                
                      	document.getElementById(pageNum).style.display = "block";
                       	elmnt.style.backgroundColor = color;
		}
		document.getElementById("defaultOpen").click()

