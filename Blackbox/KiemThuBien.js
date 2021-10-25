const CallType = require("../app");

/*
Kiem thu bien voi gia tri nomPage = 500, nomRating = 5
*/

let inputPage = [0, 1, 999, 1000];
let inputRating = [0, 1, 9, 10];
let nomPage = 500, nomRating = 5;
let Result = ["Type 3", "Type 3", "Type 6", "Type 6", "Type 1", "Type 1", "Type 3", "Type 3",]


for (let i = 0; i < 4; ++ i) {
    if (CallType(nomPage, inputRating[i]) != Result[i]) 
        console.log("Wrong!\n");
    else
        console.log("Correct\n");
}
for (let i = 0; i < 4; ++ i) {
    if (CallType(inputPage[i], nomRating) != Result[i+4]) 
        console.log("Wrong!\n");
    else
        console.log("Correct\n");
}