const PI = 3.14;
let area = 0;
function circleArea(radius) {
    area = radius * radius * PI;
    return area;
};
let radius = 3;
circleArea(radius);
console.log(`Success! Area1: ${area}`);

radius = 4;
circleArea(radius);
console.log("Success! Area2:", area);