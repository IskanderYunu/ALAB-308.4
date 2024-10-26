//From previous lab

console.log('Part 3')
// const cell1 = 'ID, Name, Occupation, Age'
// const cell2 = '42, Bruce, Knight, 41'
// const cell3 = '57, Bob, Fry Cook, 19'
// const cell4 = '63, Blaine, Quiz Master, 58'
// const cell5 = "98, Bill, Doctor’s Assistant, 26"
// console.log(cell1, cell2, cell3, cell4, cell5)

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;

for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    if (char == "," || char == "\n") {
        switch (cellNum) {
            case 1:
                cell1 = cell;
                break;
            case 2:
                cell2 = cell;
                break;
            case 3:
                cell3 = cell;
                break;
            case 4:
                cell4 = cell;
                break;
        }
        if (cellNum == 4) {
            cellNum = 1;
        }
        else {
            cellNum += 1;
        }
        cell = "";
    } else {
        cell += char;
    }
    if (char == "\n") {
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}
console.log('==============================Part 1=======================================')
//makes splitting table data more efficiently

csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

console.log(csvData);
const arr = csvData.split('\n');
const header = arr[0].split(','); // Splits

console.log(arr);
//creating header and object keys
console.log(header);

console.log('==============================Part 2=======================================')

//create empty array
let bigArray = [];


arr.forEach((string) => {
    bigArray.push(string.split(',')) //add arrays
}) 

console.log(bigArray);
//same way to create array but its a mess right now, IGNORE IT
/* let index =0;
while (index <arr.length) {
    bigArray.push(arr[index].split(','))
    index += 1;
    const obj = {};
    let headerIndex = 0;
    while (headerIndex < header.length) {
        obj[header[headerIndex]] = bigArray[headerIndex];
        headerIndex++
    }
    bigArray.push(obj)
}

 */

console.log('==============================Part 3=======================================')
csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

for (let i = 0; i < header.length; i++) {
    header[i] = header[i].toLowerCase();  //Creates Lower Case
}

// New Array for results
let dataArray = [];

// Looping each row
for (let i = 1; i < arr.length; i++) {
    const row = arr[i].split(',');
    let obj = {};

    header.forEach((object, index) => {
        obj[object] = row[index];
    });

    dataArray.push(obj);
}

console.log(dataArray);