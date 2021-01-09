//1
var  ages = [3, 9, 23, 64, 2, 8, 28, 93];
//a
var firstItem = ages [0]
var ans = ages[ages.length-1] - firstItem;
console.log('Age Last - First: ' +ans)
//b
ages.push(96);
console.log('Push: ' +ages)

ans = ages[ages.length-1] - firstItem;
console.log('Age Last - First After PUSH: ' +ans)
//c
  var averageNumber = 0

for(let i = 0; i< ages.length; i++){
      averageNumber += ages[i] 
}

console.log('Avg Age:' + averageNumber / ages.length)

//2
let names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob'];

 //a
 var length_total = 0;
for(let i = 0; i< names.length; i++){  

    length_total = length_total + names[i].length;
    //length_total += arrLengths[i];
    ///console.log('Length total: ' +length_total);
}
console.log('Avg letter per name:' + length_total / names.length);
//b
var nameList = '';
 for(let i = 0; i< names.length; i++)
 {
    nameList = nameList + names[i] + '  ' ;
    //console.log('Name List:' + nameList);
 }
 //
console.log('Concatenated Name list:' + nameList)

//3
//  Use the length property of array
ans = names[names.length-1];
console.log('Using length property: ' +ans)
//4
// Use the 0 index of array
console.log('Using 0 index for first element of array: ' + names[0]);
//5

let nameLengths = names.map(function(element) {
    return element.length;
});

//console.log('nameLengths Array:' + nameLengths);

//6
let sum = nameLengths.reduce(function(accumulator, currentValue){ 
   return accumulator + currentValue;
});

console.log('Sum of the nameLengths:' + sum);

//7
function wordConcat( word, n){
   
    var temp = '';

    for(let i = 1; i <= n; i++){
     temp = temp + word; 
    }

    return  temp;
}
 var nameRepeated = wordConcat('Hello', 3);
console.log(nameRepeated);
//8 
function createFully(firstName, lastName){
     return firstName + ' ' + lastName;
}

var ans = createFully('Kobe', 'Bryant');
console.log(ans) ;
//9
var nums = [50,10,24,50,50];

function sumGreaterThan100(arrayOfNumbers){
  
    var totalsum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++)
    {  
       totalsum = totalsum + arrayOfNumbers[i] 
    }
    if( totalsum > 100){
        return true
    } 
    else {
    return false; 
    }

}
var  sumofgreaterfunc = sumGreaterThan100(nums);
console.log('Answer to my greater function: ' + sumofgreaterfunc);
//10

var doomArray = [20, 30, 40, 10]

  var sum2 = doomArray.reduce(function(a, b){
      return a + b;
  })
  console.log('Average of question #10 : ' + sum2/ doomArray.length)

  //11
// Beats Me!!! I could use some work on this particular ?

  //12
   
  function willBuyDrink(isHotOutside, moneyInPocket) {
    
     if(isHotOutside && moneyInPocket > 10.50) {
        return true;
   } else{
       return false;
   }
      
}
console.log('Test : ' + willBuyDrink(true, 79
    ));
//13 
 function greeting() {
     console.log('Hi Everybody');
 }
 greeting();
   
 
  
  
  
     
    
   