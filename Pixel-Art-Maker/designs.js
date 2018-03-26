/* designs.js - Javascript/jQuery
** Author:  Colin Ashley
** Date:    12th December 2017
** Project: Pixel Art Maker - Lesson 21
** Course:  Google/Udacity Front-End Web Dev challenge.
*/

/*
** @description Creates a grid(table) and sets cell color on cell click event.
** @returns: No return value.
*/
function makeGrid() {

   // All variables declared using 'let' as per the Udacity JavaScript Styleguide

   // Collect table dimensions
   let tabHeight = $('#input_height').val();
   let tabWidth = $('#input_width').val();

   /* Clear table otherwise multiple submit clicks will append to the grid!
   ** Just delete all the tables children.
   */
   let tab = $('#pixel_canvas');
   tab.children().remove();

   /* Create specified number of rows and columns 
   ** using an embedded 'for' loop. jQuery will automatically
   ** close the html tags.
   */
   for (let row=0; row < tabHeight; row++) {
      tab.append('<tr>');
      for (let col=0; col < tabWidth; col++) {
         tab.children().last().append('<td>');
      }
   }

   // find the Cells
   let cell = tab.find('td');
	
   // When a cell is clicked, set the td color.
   // Using convenience method.
   cell.click(function() {
   // Select latest color selected
   let color = $("#colorPicker").val();
      $(this).css("background-color", color);
   });
}

/* Main code, wait for document/DOM to be ready, then await
** sumbit button click.
*/
$( document ).ready(function() {
   // Call makeGrid() when 'submit' button pressed
   let submitQuery = $('input[type="submit"]')

   submitQuery.click(function(event) {
     event.preventDefault();
     makeGrid();
   });
});
