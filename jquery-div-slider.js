$.fn.slide = function(settings){

  // set default settings 
  
  var def = {
	  
	  changetime : 5000 , // div transition time , milisecond
	  effecttime : 500  , // effect time for div  , milisecond
	  bullets    : true   // show bullet 
   
  
          };

   var settings = $.extend(def , settings);



	var dv = jQuery(this)
	if(settings.bullets === true){
		
		
	$(dv).append($('<ul></ul>'));
	$(dv).find('ul').hide();
	$(dv).find('div').each(function(i) {
        $(dv).find('ul').append($('<li data-s="'+i+'"></li>'));
		$(dv).find('div:eq('+i+')').attr("data-s",i);
       
	
	}); 
	
	$(dv).mouseenter(function(){ $(dv).find('ul').slideDown(200); });
    $(dv).mouseleave(function(){ $(dv).find('ul').slideUp	(200); });
	$(dv).find('ul li:first-child').css('background','#060');
	
							  $(dv).find('ul li').click(function(e) {
             clearInterval(interval);
					var sid = $(this).attr('data-s');
					$(dv).find('ul li').removeAttr("style");
					$(this).css("background","#060");
					
					$(dv).find('div:first-child').animate({width:'0px'},settings.effecttime).hide().appendTo($(dv));
                    $(dv).find('div[data-s='+sid+']').animate({width:'100%'},settings.effecttime).show().prependTo($(dv));
                    $(dv).find('ul').appendTo(dv);


                    		     var interval = setInterval(function () {
					 
					 if(settings.bullets === true){
                var id = $(dv).find('div:first-child').next('div').attr('data-s');      
					  $(dv).find('ul li').removeAttr('style');
				      $(dv).find('ul li[data-s='+id+']').css("background","#060");
					  $(dv).find('ul').appendTo(dv);
					 }
					 
					 
					 $(dv).find('div:first-child').animate({width:'0px'},settings.effecttime).hide()
                     .next('div').animate({width:'100%'},settings.effecttime).show()
                      .end().appendTo(dv);
					 
					 
                                },
            settings.changetime);                      

					
                });
	
	
	
	}
	
		 $(dv).find('div').width('0').hide(); 
		 $(dv).find('div:first-child').show().width('100%');; 
         
		 
		     var interval = setInterval(function () {
					 
					 if(settings.bullets === true){
                var id = $(dv).find('div:first-child').next('div').attr('data-s');      
					  $(dv).find('ul li').removeAttr('style');
				      $(dv).find('ul li[data-s='+id+']').css("background","#060");
					  $(dv).find('ul').appendTo(dv);
					 }
					 
					 
					 $(dv).find('div:first-child').animate({width:'0px'},settings.effecttime).hide()
                     .next('div').animate({width:'100%'},settings.effecttime).show()
                      .end().appendTo(dv);
					 
					 
                                },
            settings.changetime);		  

} 
