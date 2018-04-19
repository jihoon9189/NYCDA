for (i = 0; i < 10; i++) {                          //#1
    console.log("I love making pizza pies");
}

console.log("");

var counter = 1;                                    // #2
for (i = counter; i < 101; i++) {
    console.log("Counter = " + counter);
    counter++;
}

console.log("");

var fruit = ["Banana", "DragonFruit", "Orange", "PassionFruit"]         // #3
for( i = 0; i < fruit.length; i++) {

    console.log(fruit[i]);
}

console.log("");

do {                                                                    // #4
    var word = prompt("PLease enter abbreviations of New York Code + Design Academy", " ")
} while(word != "NYCDA")


