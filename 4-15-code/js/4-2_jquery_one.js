
$( document ).ready(function() {
  //feature 2 - CLICK TRACKER BG COLOR CHANGER
    // * variable to hold given click
    var i = 0;
    var colour = "  green";
    $("#feature_one").hide();
    $("#one").click(function(){
    	$("#menu").hide("slow");
    	$("#feature_one").show("slow");
    });

    // clickable object
    	// update the object with the variable to display the given number of clicks
    	
    $("p#screen_one_p").click(function(){
    $(this).html(i+=1);

    // conditional statements - change a state based on click number (new colour with each click)

	    if(i==1){
	    	$('#feature_one').addClass("green");
	    	$('p#screen_one_p').append(colour);
	    } else if(i==2){
	    	colour = "  pink";
	    	$('p#screen_one_p').append(colour);
	    	$('#feature_one').addClass("pink");
	    } else if(i==3){
	    	colour = "  blue";
	    	$('p#screen_one_p').append(colour);
	    	$('#feature_one').addClass("blue");
	    } else if(i==4 || i>4){
	    	$(this).html(" done");
	    }

	});
    
});



//BUILDS

    //feature 1 - simple ui screen 
    // * description - 2 Clickable text objects
    					// "show" 2 hidden screen 
    					// click object to hide the given screen
    
    //feature 2 - CLICK TRACKER BG COLOR CHANGER
    // * variable to hold given click
    // clickable object
    	// update the object with the variable to display the given number of clicks
    	// conditional statements - change a state based on click number (new colour with each click)

    //feature 3 - MENU WITH DRAGGABLE DROP DOWN OPTIONS - DRAGGABLES ACTIVATE ANIMATION
    // * clickable menu object
    // on click - drop down menu options
    // menu options draggable
    // droppable object
    // on drop - with conditionals - trigger a state

    // combine features into one DOM html 
    
    // call from UI screen - hide from active screen 
