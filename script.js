//complete this code
//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
		constructor(side){
			super(side, side);
	}
	getPerimeter(){
		return this.width * 4;
		
	}
}
// Do not change the code below this line
window.Rectangle = Rectangle;
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
window.Square = Square;
console.log(rectangle.getArea()); // Output: 50
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
console.log(rectangle.getArea()); // Output: 50
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
console.log(rectangle.getArea()); // Output: 50
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
