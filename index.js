// code step 1

let myArray = [3, 9, 23, 64, 2, 8, 28, 93]; // created an array
console.log (myArray[myArray.length - 1] - myArray[0]); // printed the last value from myArray being subtracted from the first value
myArray.push(25); // added a new age to my array
console.log (myArray[myArray.length-1] - myArray[0]); // testing that 25 was added to the end of myArray and subtracting it from the first value. Just like I demostrated above. 
var sum=0, avg = 0.0;
for(var i = 0; i < ages.length; i++) { // running a loop from 0 to the length of the array
    sum = sum + ages[i]; //adding values from myArray to the sum
}

avg = sum / ages.length //calculating the average

console.log(sum/ages.length); // printing average

// step 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // created the array called "names"
sum = 0;
for (let i=0;names.length; i++) {
    sum = sum + names[i].length;
} //calculating average letters per name in the names array

console.log (sum/names.length); //printing average letters per names in the array

var con = names[0]; 
for ( let i = 1; i < names.length; i++) {
    con = con.concat("", names[i]);
}
console.log(con); // concatenating names

// step 3

console.log (names[names.length - 1]); // How I access the last element of names array

//step 4

console.log (names[0]); // How I access the first element array

//step 5

let nameLengths = [] // created empty array
for( let i=0; i <names.length; i++) {
nameLengths.push(names[i].length); 
} // creating a loop and storing lengths of each names in the nameLengths array

// step 6

sum = 0;
for ( let i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log (sum); // creating a loop, calculating the sum off all values in the nameLengths array, and then printing the sum

// step 7

function myFunction (word, n) {
    let con = word; 
    for( let i = 1; i <+n; i++) {
        con = con.concat(word);
    }
    return con;
} // creating a function to concatenate same word for n times

console.log( myFunction ("Hello", 3)); // printing the concatenated sameword for n times using function call

// step 8

function fullName (firstName, lastName) {
    return firstName.concat(" ", lastName);
} // creating a function to create a full name with firstName and lastName

console.log(fullName ("Nate", "Barnes"));

//step 9 

function totalGreaterThanOneHundred(arr){
    sum= 0;
    for ( let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
if (sum > 100) {
    return true;
}
else {
    return false;
}
} // creating a function to check the total sum of all the elements is greater than 100 or not

// step 10 

function average(arr){
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return (sum/arr.length);
} //created a function to calculate average of all values in a number array

// step 11 

function greaterAvg (arr1, arr2) {
    let total1= 0;
    for (let i = 0; i < arr1.length; i++) {
        total1 += arr1[i];
    }
    let total2 = 0;
    for ( let i = 0; i < arr2.length; i++) {
        total2 += arr2[i];
    } // created function using for loops in preparation for defining average variables 
    let avg1 = total1 / arr1.length;
    let avg2 = total2/ arr2.length;
    if (avg1 > avg2) {
        return true;
    }
    else {
        return false;
    }
} // used if else statements to excute the code if it's true



 // created a function to compare the two arrays and returns true if the average of one array is bigger than the other

 // step 12 

 function willBuyDrink ( isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.5) {
        return true;
    }
    else {
        return false;
    }
 }

// step 13: I'm creating a function that will calculate a tip for your check

function calculateTip(amount) {
    var tip = amount * 0.2;
    return Math.ceil(tip);
  }

 