//Instructions: Given an array with all distinct elements, write a function that takes
//the array as an argument, returns the largest three elements of the array.
//If the array is less than three values, be sure to return 'Invalid array size' to the user.
//Your code should pass the test cases below.

function largest (arr){
    if (arr.length< 3){
        return 'Invalid array size'
    }

    let firstLargestEl= arr[0];
    let secondLargestEl = -Infinity;
    let thirdLargestEl = -Infinity;

for( const num of arr){
    if (num > firstLargestEl){
        thirdLargestEl=secondLargestEl;
        secondLargestEl=firstLargestEl;
        firstLargestEl=num;}
    else if (num > secondLargestEl){
    thirdLargestEl = secondLargestEl;
    secondLargestEl= num;}
    else if( num> thirdLargestEl){
    thirdLargestEl= num;}
    }
    return {
        firstLargestEl, secondLargestEl, thirdLargestEl
}

}


const inputArray = [10, 4, 3, 50, 23, 90];
const outputElements =
    largest(inputArray);
console.log(outputElements);



//Test Cases:
//largestThree([10, 4, 3, 50, 23, 90]) -> 90, 50, 23
//largestThree([12, 13, 1, 10, 34, 11]) -> 34, 13, 12
//largestThree([10, 2]) -> Invalid array size

