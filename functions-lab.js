// // Exercise 1
// function computeAreaUsing(width, height) {
//     let area = width * height
//     return("The area of a rectangle with the width " + width + " and a height " + height + " is " + area + " square units.")
// }
// console.log(computeAreaUsing(2, 4))

// Exercise 2

const planetHasWaterUsing = (planet) => {
    if(planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars") {
        return true;
    } else {
        return false;
    }
}
console.log(planetHasWaterUsing("saturn"))