var  about_chek;
var  more_chek;
var  about_us_chek;

var click_about_us;

var id = "111";
var chek = true;

about_chek = true;
more_chek = true;
about_us_chek = true;


$("#click_about_app").click(function(){showHide(about_chek, "#hide_about_app");});
$("#click_more_apps").click(function(){showHide(more_chek, "#hide_more_apps");});
$("#click_about_us").click(function(){showHide(about_us_chek, "#hide_about_us");});


function showHide(chek, id) {
		
		
	
    if(chek == true) {
     $(id).hide();
	 
	 
	    if(id=="#hide_about_app"){
	   about_chek=false;
   }
   
   if(id=="#hide_more_apps"){
	   more_chek=false;
	   
	   
   }
   
   
   if(id=="#hide_about_us"){
	   about_us_chek=false;
   }
   
   }
   else {	   
     $(id).show();
	 
	   if(id=="#hide_about_app"){
	   about_chek=true;
	   }
	   
	   if(id=="#hide_more_apps"){
		   more_chek=true;
	   }
	   
	   if(id=="#hide_about_us"){
		   about_us_chek=true;
	   }
	 
   } 
   

  }
  
  
  var h;
  var a = $(window).width();

  if(a>"600"){
  }else{
	  h = $(".description")[0].scrollHeight;
  }


$("#more").click(function(e) {
    e.stopPropagation();
    $(".description").animate({
        "height": h
    })
});


$(document).click(function() {

    $(".description").animate({
        "height": "200px"
    })
})






