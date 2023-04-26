"use strict";

//Create 3 const variables to store the selectors for the eleemnts I want to play with
const taskInput = document.getElementById("input-text");
const taskBtn = document.getElementById("task-submit");
const taskList = document.getElementById("task-list");

taskBtn.addEventListener("click", function () {
	//Variable to hold the value of the text inside the input field
	//.trim method to ensure trailing whitespace doesn't get included in the submission
	const taskText = taskInput.value.trim();

	//So only execute the below logic if the condition is met
	//That condition being whether taskText, or text inside the input field, is present
	if (taskText) {
		//Create my new li task element
		const taskItem = document.createElement("li");

		//Test to see if I can declare the text content of the newly created taskItem to be equal to the taskText, which is the variable holding the value of the text present within the input field
		taskItem.textContent = taskText;

		//Add it to the DOM
		taskList.prepend(taskItem);

		//Empty the input field
		taskInput.value = "";

		//Logic to change the background color to green (complete) when a taskitem is clicked
		taskItem.addEventListener("click", function () {
			taskItem.style.backgroundColor = "#29bf12";
		});

		//IT FUCKING WORKS!!!!!!!!!!!
	} else if (taskInput.value.length == 0) {
		alert(
			"Please fill out the input field before trying to submit a new item!"
		);
	}
});
