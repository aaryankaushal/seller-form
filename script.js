jQuery(document).ready(function($)
{
  
  $("#readMore").click(function()
  {
    
	  if ($("#author_bio_wrap_toggle").text() == "Expand Author Details")
      {			
        $("#author_bio_wrap_toggle").html("Hide Author Details")
      }
	  else 
      {		
        $("#author_bio_wrap_toggle").text("Expand Author Details")
      }
    
  });  
  
});