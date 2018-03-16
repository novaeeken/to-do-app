$( document ).ready(function() {

	// when task is submitted
	$("#btn-add-task").on("click", function() {
		let task = $("#task-input").val();
		let prio = $("#priority-pick").val();
		
		$(".tasks")
		.append(`<article class="single-to-do" >
            		<div class="row">
            			<div class="col-sm-1 check">
            				<label class="checkbox-container">
            					<input type="checkbox">
            					<span class="checkmark"></span>
            				</label>
            			</div>
            			<div class="col-sm-8 title">
            				<p class="task-text" value=""> ${task}</p>
            			</div>
            			<div class="col-sm-2 date"> today </div>
            			<div class="col-sm-1 priority"> <p> ${prio}</p> </div>
            		</div>
            		<div class="line"> </div>
            	</article>`);
	});


	// edit tasks
	$(".task-text").on("click", function() {
		let task = $(this).attr("value");

		let element = $(this);
		console.log(element);
	});

});