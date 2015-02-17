$( document ).ready(function() {

  $(".homenav a").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $('.home').animate({
        top: "-72"
    	}, 250, redirectPage); 
  });

  function redirectPage() {
		  	window.location = linkLocation;     
	}
  
});