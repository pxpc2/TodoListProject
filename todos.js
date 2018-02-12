// check ON/OFF specific to-do's by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// delete a TODO
// note: on() instead of click() because click only adds to existing elements
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(250, function() { // parent of the span is the Li
		$(this).remove(); // we are already referring to the Li here
	}); 
	event.stopPropagation(); // will fire the span but not propagate to the Li event, UL or DIV or body etc
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) { // 13 = ENTER
		var todo = $(this).val();
		$(this).val("");
		// create new Li and add to Ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todo+"</li>");
	}
});

$("h1").on("click", ".fa-plus", function() {
	$("input[type='text']").fadeToggle();
});