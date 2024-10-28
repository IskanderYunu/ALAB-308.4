
console.log('==============================Part 1=======================================')
//makes splitting table data more efficiently

csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

console.log(csvData);
const arr = csvData.split('\n');
const header = arr[0].split(','); // Splits

console.log(arr);
//creating header and object keys
console.log(header);

console.log('==============================Part 2=======================================')

//create empty array
let bigArray = [];

let rowdataIndex = 1;


arr.forEach((string) => {
    bigArray.push(string.split(',')) //add arrays
}) 

console.log(bigArray);

console.log('==============================Part 3=======================================')

csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

for (let i = 0; i < header.length; i++) {
    header[i] = header[i].toLowerCase();  //Creates Lower Case
}

// New Array for results
let dataArray = [];

// Looping each row
for (let i = 1; i < arr.length; i++) {
    const row = arr[i].split(',');
    let obj = {};

    for (let z = 0; z < header.length; z++) {
        obj[header[z]] = row[z];
    }

    dataArray.push(obj);
}

console.log(dataArray); 

console.log('==============================Part 4=======================================')

dataArray.pop(); //remove last element from the array

console.log(dataArray)

let addIndex = dataArray.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});  //adds to Index 1

let endIndex = dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); // adds to end of the array

console.log(dataArray);

console.log('==============================Part 5=======================================')

// 1. Extract headers
const headers = Object.keys(dataArray[0]);
csvData = headers.join(','); // Start with the header row

// 2. Loop through each row
for (let i = 0; i < dataArray.length; i++) {
    let row = '';
    for (let z = 0; z < headers.length; z++) {
        row += dataArray[i][headers[z]];
        if (z < headers.length - 1) row += ','; // Add a comma between each of the values 
    }
    csvData += '\\n' + row; // Adds the \n 
}

console.log(csvData);