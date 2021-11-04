let selectElementsStartingWithA = (array) => {
    let startsWithA = [];
    for(fruit of array){
        if(fruit.startsWith("a") == true){
        startsWithA.push(fruit);
        }
    }
    return startsWithA;
}

let selectElementsStartingWithVowel = (array) => {
    let startsWithVowel = [];
    for(fruit of array){
        if(fruit.startsWith("a")  == true || fruit.startsWith("e")  == true || fruit.startsWith("i")  == true || fruit.startsWith("o")  == true || fruit.startsWith("u")  == true || fruit.startsWith("y")  == true){
        startsWithVowel.push(fruit);
        }
    }
    return startsWithVowel;
}

let removeNullElements = (array) => {
    function checkValue(element){
        return element != null;
    }

    let filtered = array.filter(checkValue);
    return filtered;
}

let removeNullAndFalseElements = (array) => {
    function checkValue(element){
        return element != null && element !== false;
    }
    let filtered = array.filter(checkValue);
    return filtered;
}

let reverseWordsInArray = (array) => {
    let str = array.join(',');
    let newStr = ""; 
    for(let i=str.length - 1; i >=0; i--){
        newStr += str[i]
    }
    return newStr.split(',').reverse();
}

let everyPossiblePair = (array) => {
    let pairs = [];
    for(let i=array.length -1;i>=0;i--){
        for(let j=0;j<array.length-1;j++){
            if(i != j && i !=1){
                pairs.push([array[i],array[j]]);
            }
        }
        
    }
    return pairs;
    
    
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(1);
    return array;
}

let sortByLastLetter = (array) => {
     array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
     return array;
}

let getFirstHalf = (string) => {
    return string.substring(0,Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    
    let str = array.join(',');
    let newStr = ""; 
    for(let i=str.length - 1; i >=0; i--){
        newStr += str[i]
    }
    let reversed = newStr.split(',').reverse();
    let palindromes = [];
    
    for(let i=0;i<array.length;i++){
        for(let j=0;j<reversed.length;j++){
            if(array[i] === reversed[j]){
                palindromes.push(array[i]);
            }
        }
    }
    return palindromes.length;
    
}

let shortestWord = (array) => {
    
    let shortestWord = '';
    let length = [];
    
    for(let i=0;i<array.length;i++){
         length.push(array[i].length);
         if(array[i].length === Math.min(...length)){
            shortestWord = array[i];
        }
    }
    
    return shortestWord;
}

let longestWord = (array) => {
    let longestWord = '';
    let length = [];

    for(let i=0; i<array.length; i++){
        length.push(array[i].length);
        if(array[i].length === Math.max(...length)){
            longestWord = array[i];
        }
    }

    return longestWord;
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
    return [...array,...array]; 
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    
    let total = array.reduce((a, b) => a + b, 0);
    
    return total / array.length;

}

let getElementsUntilGreaterThanFive = (array) => {
    
    let noHigherThan5 = [];
    for(let i=0; i<array.length; i++){
        if(i <= 5 ){
            noHigherThan5.push(array[i]);
        }
    }
    return noHigherThan5;
}

let convertArrayToObject = (array) => {
    
    const entries = new Map([
        [array[0],array[1]],
        [array[2],array[3]],
        [array[4],array[5]]
      ]);
      
      const obj = Object.fromEntries(entries);
    
    return obj;
}

let getAllLetters = (array) => {

    let arr = [];
    let arr2 = array.join('').split('').sort();

    for(let i=0; i<arr2.length;i++){
        if(arr.includes(arr2[i]) == false){
            arr.push(arr2[i]);
        }
    }
    return arr;
    
}

let swapKeysAndValues = (object) => {
    const swapped = Object.fromEntries(Object.entries(object).map(a => a.reverse()))
    return swapped;
} 
let sumKeysAndValues = (object) => {
    
    let array = Object.keys(object).map(function(data){
                return [data,object[data]];
                });
    let str = array.join(',');
    let arr = [];
    
    
    for(let i=0;i<str.length;i+=2){
        arr.push(Number(str[i]));
    }

    
    return arr.reduce((a, b) => a + b, 0);
}

let removeCapitals = (string) => {
    
    const smallLetter =  (string) => string.split('').filter(a => a.match(/[a-z ]/)).join('');
    return smallLetter(string);
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
   
    return new Intl.DateTimeFormat(['fre', 'fr']).format(date);

}

let getDomainName = (string) => {
    
    let domain = string.substring(string.lastIndexOf("@")+1,string.lastIndexOf("."));
    return domain;
}

let titleize = (string) => {
    
    let arr = string.split(' ');
    
    for(let i=0;i<arr.length; i++){
        if(arr[i].length == 6){
            
           arr[i+1] = arr[i+1].charAt(0).toUpperCase() + arr[i+1].substring(1);
        }
        if(arr.indexOf(arr[i]) == 0 || arr[i].length > 3 ){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1); 
        }
        
    }
    let str = arr.join(' ');
    
   return str;
    
}

let checkForSpecialCharacters = (string) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(string)){
        return true;
    } else {
        return false;
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let answer = 1;
    if (number == 0 || number == 1){
        return answer;
    }else{
        for(var i = number; i >= 1; i--){
         answer = answer * i;
        }
    return answer;
  }  
}

let findAnagrams = (string) => {
    function allAnagrams (word) {
        if (word.length < 2) {
          return [word];
        } else {
           let allAnswers = [];
            for (let i = 0; i < word.length; i++) {
              let letter = word[i];
              let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
              let shortwordArray = allAnagrams(shorterWord);
              for (let j = 0; j < shortwordArray.length; j++) {
                allAnswers.push(letter + shortwordArray[j]);
              }
            }
            return allAnswers;
        }
      }
      
      return allAnagrams(string);
}

let convertToCelsius = (number) => {
    const fahrenheitToCelsius = fahrenheit => Math.round((fahrenheit - 32) * 5/9);
    return fahrenheitToCelsius(number);
}

let letterPosition = (array) => {
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let arr = alphabet.split('');
    let positions = [];
    

    for(let j = 0; j<array.length;j++){
        array[j] = array[j].toLowerCase();

        for(let i=0;i<arr.length;i++){
            if(array[j] === arr[i]){
                positions.push(i+1);
            }
        }
    }
    return positions;

}