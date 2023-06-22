// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= 100; i++){
        if(i % 2 !== 0)
        console.log(i)
    }
}
printOdds()

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    if(age >= 16){
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else if(userName, age === undefined){
        userName = ""; 
        age = 0;
        console.log("Please enter parameters!")
    }
    else{
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`)
    }
}
checkAge("Keegan", 33)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function  whichQuadrant(x, y){
    if(x === 0 && y === 0){
        console.log("This is at the origin")
    }
    else if(x === 0){
        console.log(`${x}, ${y} is on the y axis`)
    }
    else if (y === 0){
        console.log(`${x}, ${y} is on the x axis`)
    }
    else if(x > 0 && y > 0){
        console.log("Quadrant 1")
    }
    else if(x < 0 && y >0){
        console.log("Quadrant 2")
    }
    else if(x < 0 && y < 0){
        console.log("Quadrant 3")
    }
    else{
        console.log("Quadrant 4")
    }
}

whichQuadrant(1, 2)