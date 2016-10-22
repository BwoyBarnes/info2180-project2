var puzzlearea;
var squares;
var emptySpaceX;
var emptySpaceY;
var shufflebutton;

window.onload = function()
{
	puzzlearea = document.getElementById("puzzlearea");
	squares = puzzlearea.getElementsByTagName("div");
	shufflebutton = document.getElementById("shufflebutton");
	

	// This for-loop arranges the numbers into a puzzle grid
	// and attaches event-handler functions to make the game work
	for (var i=0; i<squares.length; i++)
	{
		// Assigns the puzzlepiece css class styling to each of the pieces 
		squares[i].className = "puzzlepiece";

		// Used to arrange the pieces into a grid formation
		squares[i].style.left = (i % 4 * 100) + "px";
		squares[i].style.top = (parseInt(i / 4) * 100) + "px";

		// Evaluates to "-x00 px -x00 px" to position the image on the squares
		squares[i].style.backgroundPosition = "-" + squares[i].style.left + " " + "-" + squares[i].style.top;
		

		// Assignment of event-handler functions to the pieces

		// Used to move a piece if it can be moved when clicked
		squares[i].onclick = function()
		{
			// Need to add code to check if the piece can be moved
			// before moving the piece

			SwitchPieces(parseInt(this.innerHTML-1));
		}

		// Used to show the user if a piece can be moved when hovered
		// by changing the colour of the piece
		squares[i].onmouseover = function()
		{
			// Need to add code to check if the piece can be moved

			this.classList.add("movablepiece");
		}

		// Used to revert the colour of the piece back to default 
		// when the user's cursor leaves the piece
		squares[i].onmouseout = function()
		{
			this.classList.remove("movablepiece");
		}

		
	}

	// Shufflebutton Function to be added later
	/*shufflebutton.onclick = function()
	{
			
	}*/
	
	// Variables to track the position of the empty space on the grid
	emptySpaceX = '300px';
	emptySpaceY = '300px';

}
// Used to switch or move a piece on the grid to the empty space
function SwitchPieces(puzzlePiece)
{
	// Swap X positions
	var temp = squares[puzzlePiece].style.left;
	squares[puzzlePiece].style.left = emptySpaceX;
	emptySpaceX = temp;

	// Swap Y positions
	temp = squares[puzzlePiece].style.top;
	squares[puzzlePiece].style.top = emptySpaceY;
	emptySpaceY = temp;

}