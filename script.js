for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log(currentNumber, "monkey chicken")
    } else if (currentNumber % 5 === 0) {
        console.log(currentNumber, "monkey")
    } else if (currentNumber % 7 === 0) {
        console.log(currentNumber, "chicken")
    }
}

let bandNumber = 1

const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const smtsg = takeNumber("Ski Mask the Slump God")
console.log(smtsg)

const posty = takeNumber("Post Malone")
console.log(posty)

// write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    console.log(cookedFood)

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++) {
    grill(foods[i])
}


//Jordan told me the answer for excerise below this line

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp = `${buildMeUp}  ${theWordArray[i]}`
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)

//Jordan told me the answer for excerise above this line




//Sydney Helped me build this, I never would have figured this out BELOW THIS LINE

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, question, number) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
            for(let p = 0; p < number; p++){
            buildMeUp = `${buildMeUp}${question}`}
               } else {
            buildMeUp = `${buildMeUp} ${theWordArray[i]}`
        } console.log(buildMeUp)
    }
}

addExcitement(sentence, "?", 4)


/*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console