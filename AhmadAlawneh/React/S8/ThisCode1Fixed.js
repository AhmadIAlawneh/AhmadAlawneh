function printFoodsAndDrinks() {
    const drinks = ['lemonade', 'soda', 'tea', 'water'];
    const foods = ['beans', 'chicken', 'rice'];

    console.log("Drinks:");
    for (const drink of drinks) {
        console.log(drink);
}

    console.log("\nFoods:");
    for (const food of foods) {
        console.log(food);
}
}

// Function to calculate and print age
function calculateAndPrintAge(birthYear, birthMonth, birthDay) {
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    if (ageInYears < 0) {
        console.log("Invalid age: Age cannot be negative.");
} else {
        console.log("Age: " + ageInYears);
}
}

// Calling the functions
printFoodsAndDrinks();
calculateAndPrintAge(1985, 2, 16);