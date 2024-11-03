function great(){
    console.log("Hello World!");
}

//Favorite Number

function favoriteNumber (){
    let number = prompt("write your Favorite Number:");
    console.log(number);
}


// Magic Ball 
let wordslist = ["yes", "No", "Maybe", "Ask again later"];
function randomResponse(){
    let response = wordslist[Math.floor(Math.random() * wordslist.length)];
    console.log(response);
}
randomResponse()


// currentYear

function getCurrentYear (){
    const date = new Date();
    let year = date.getFullYear();
    console.log(year);
}
getCurrentYear()


// get Joke

let Jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None. It’s a hardware problem.",
    "I would tell you a joke about UDP, but I’m not sure you’d get it.",
    "Why do Java developers wear glasses? Because they don’t see sharp!",
    "There are only 10 kinds of people in the world: those who understand binary, and those who don’t."
];
function getJoke() {
    let getjoke = Jokes[Math.floor(Math.random() * Jokes.length)];
    console.log(getjoke);
}
getJoke()

//PersonalGreeting
function PersonalGreeting(name) {
    console.log("Hello " + name);
}
PersonalGreeting(prompt("Skriv ditt namn:"));

//Sum of Two Numbers
function sumNumber(x, y) {
    console.log(x + y);
}

sumNumber(parseInt(prompt("Enter the first number:")), parseInt(prompt("Enter the second number:")));


//ageInMonth


function ageInMonth(age) {
    let month = age * 12;
    console.log("Din ålder är:", month + " månader");
}
ageInMonth(parseInt(prompt("Ange din ålder")));

// convert to fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C är lika med " + fahrenheit + "°F");
}
celsiusToFahrenheit(parseInt(prompt("Ange temp i celsius:")));


//getFullname
function getFullName(fname, lname) {
    console.log("Fullname:", fname, lname);
}
getFullName(prompt("Skriv din förnamn"), prompt("Skriv din efternamn"));

// Area of a Rectangle
function areaOfRectangel(width, length) {
    let area = width * length;
    return area;
}
areaOfRectangel(20, 10);

//Find maximum
function findMax(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return "Both numbers are equal"
    }
    
}
// Exampel usage:
findMax(10, 10);

//countVowels
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
        
    }
    console.log("Number of vowels:" + count);
}
countVowels(prompt("skriv en ord"));

//calculateDiscount
function calculateDiscount(price, discount) {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return "Price after discount:" + finalPrice;
}
calculateDiscount(100, 20);

//reverseString
function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    return reversed;
}
// Example usage
reverseString("Hello");

// isPalindrome

function isPalindrome(str) {
    // Remove any spaces and convert to lowercase for consistency
    let cleanedStr = str.toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
// Exampel usage :
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"));


//FizzBuzz
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
fizzBuzz(parseInt(prompt("Write a Number")));


//factorial number
function factorial(n) {
    // Check if the input is a positive integer
    if (n < 0) {
        return "Please enter a positive integer.";
    }
    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // 120


//findLongestWoed
function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';

    // Iterate through the array of words
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord;
}
// Example usage
console.log(findLongestWord("I love programming in JavaScript")); 



//calcuteAverage
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

// Example usage
console.log(calculateAverage([10, 20, 30, 40, 50])); 


//function removeDuplicates
    function removeDuplicates(arr) {
        const uniqueArray = []; // Create an empty array to store unique values
        for (let i = 0; i < arr.length; i++) {
            // Check if the value is not already in the uniqueArray
            if (!uniqueArray.includes(arr[i])) {
                uniqueArray.push(arr[i]); // Add it to the uniqueArray
            }
        }
        return uniqueArray; // Return the array with unique values
    }
    
    // Example usage
    const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = removeDuplicates(arrayWithDuplicates);
    console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
    

    //capitalizeFirstLetter
    function capitalFirstletter(str) {
        let firstChar = str.slice(0,1);
        let uppercaseFirstchar = firstChar.toUpperCase();
        let restOfstr = str.slice(1,str.length);
        restOfstr = restOfstr.toLowerCase();
        return uppercaseFirstchar + restOfstr;
    }
    capitalFirstletter("Hello");
  
    


// function countOccurrences
    function countOccurrences(str, char) {
    let count = 0; // Initialize a counter
    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === char) {
            count++; 
        }
    }

    return count; 
}

// Example usage
const result = countOccurrences("hello world", "l");
console.log(result); // Output: 3

//merageArrays
function mergeArrays(arr1, arr2) {
    // Create a new array that combines both arrays
    const mergedArray = [...arr1, ...arr2];
    
    // Use Set to remove duplicates and convert back to an array
    const uniqueArray = [...new Set(mergedArray)];
    
    return uniqueArray; // Return the array with unique values
}

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
mergeArrays(array1, array2);

//generatePassword
function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    // Combine all character types into one string
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers;
    let password = '';
    
    // Generate the password
    for (let i = 0; i < length; i++) {
        // Get a random index from allCharacters
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        // Append the character at the random index to the password
        password += allCharacters[randomIndex];
    }
    
    return password; // Return the generated password
}

// Example usage
const passwordLength = 12; // Specify the desired password length
const newPassword = generatePassword(passwordLength);
console.log(newPassword); // Outputs a randomly generated password of specified length
