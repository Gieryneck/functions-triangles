

var a = parseFloat(prompt('Please enter the length of the base side of the triangle', '0')),
	h = parseFloat(prompt('Please enter the height of the triangle', '0'));
	

function getTriangleArea (a, h) {


	if (a <= 0 || h <= 0) {

		return alert('The data must be a positive number. Please try again.');
	} else {

		var triangleArea = a * h / 2; /* ta zmienna musi być tutaj, żeby była aktualizowana przy każdym kolejnym wywołaniu fcji getTriangleArea, gdyby była zdeklarowana 
		z powyższymi zmiennymi wartość triangleArea nie zmieniałaby się mimo nowych a i h */
		console.log('The computed field of the triangle is ' + triangleArea + ' cm2.'); 
		return alert('The computed field of the triangle is ' + triangleArea + ' cm2.');	
	}

}

getTriangleArea (a, h);


console.log(getTriangleArea(10, 6));

// nie wiem czy dobrze zrozumiałem ostatni punkt zadania, ale 3 zmienne są:

var	triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(2, 50),
 	triangle3Area = getTriangleArea(100, 50);
