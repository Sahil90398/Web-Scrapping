let fs = require("fs");
//input can be only in objects and array format ,for that only we use json 
// object ,array 
// object -> contain string as key 
// {
//     "name": "Jasbir"
// }
 let input = ["hello", "hi", "how are you"];
// write
 //let jsonWriteAble = JSON.stringify(input);
 //fs.writeFileSync("abc.json", jsonWriteAble);
 //console.log("jsonwriteable",input)
// read 
let content = fs.readFileSync("abc.json");
let jsonData = JSON.parse(content);
console.log("content" + content)
// append
jsonData.push("Hola");
let jsonWriteAble = JSON.stringify(jsonData);
fs.writeFileSync("abc.json", jsonWriteAble);
console.log("abc.json",jsonWriteAble)