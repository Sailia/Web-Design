//EVENT BASICS

    //// Event setup using a convenience method
    // $( "p" ).click(function() {
    //    console.log( "You clicked a paragraph!" );
    // });
 
    // // Equivalent event setup using the `.on()` method
    // $( "p" ).on( "click", function() {
    //    console.log( "click" );
    // });

    //adding things to the body
    $("#hide").click(function(){
       $( "<p id='hide'>yooooooo!</p>" ).appendTo( document.body ); 
    });
    

//// tracking events
    //   $( "#hide" ).on({
    //    mouseenter: function() {
    //        console.log( "hovered over a div" );
    //    },
    //    mouseleave: function() {
    //        console.log( "mouse left a div" );
    //    },
    //    click: function() {
    //        console.log( "clicked on a div" );
    //    }
    //});


//// doing things after things
    //$( "p.hidden" ).fadeIn( 750 ).addClass( "lookAtMe" );
    //
    //$( "p.hidden" ).fadeIn( 750, function() {
    //    $( this ).addClass( "lookAtMe" );
    //});