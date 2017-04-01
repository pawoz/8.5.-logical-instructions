
var a = prompt('zmienna a');
var b = prompt('zmienna b');
var value = (a * a) + (2 * a * b) - (b * b);
console.log('Value: ' + value);
if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else {
	console.log(0);
}