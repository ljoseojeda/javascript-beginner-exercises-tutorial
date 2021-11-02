function getColor(selection)
{
	var selection = selection
	switch(selection){

		case 'rojo':
			console.log('rojo');
			break;

		case 'verde':
			console.log('verde');
			break;
		case 'azul':
			console.log('azul');
			break;
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
