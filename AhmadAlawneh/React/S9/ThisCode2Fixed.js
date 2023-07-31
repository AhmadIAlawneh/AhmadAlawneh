// Updated foodsAndDrinks function
function foodsAndDrinks() {
    var x = ['lemonade', 'soda', 'tea', 'water'];
    var y = ['beans', 'chicken', 'rice'];

    // Log the contents of the 'x' array
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]);

    // Log the contents of the 'y' array
    console.log(y[0]);
    console.log(y[1]);
    console.log(y[2]);
}

// Updated getAge function (assuming it is a JavaScript function)
function getAge() {
    const birthDate = new Date(1985, 1, 16);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
}

// Updated PrintNumberAsWord function
function PrintNumberAsWord(value) {
    var word = "";
    switch (value) {
        case 0:
            word = "zero";
            break;
        case 1:
            word = "one";
            break;
        case 2:
            word = "two";
            break;
        case 3:
            word = "three";
            break;
        case 4:
            word = "four";
            break;
        case 5:
            word = "five";
            break;
        default:
            word = "unknown";
            break;
    }
    return word;
}