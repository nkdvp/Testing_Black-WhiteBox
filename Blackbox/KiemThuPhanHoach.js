import { CallType } from "../app";

/*
Kiem thu phan hoach voi Page phan ra [0, 199], [200, 499], [500, 2000]; Rating phan ra [0, 6], [7, 10].
*/

let inputPage = [48, 324, 1233, 100, 255, 1892];
let inputRating = [3, 3, 3, 9, 8, 10];

let Result = ["Type 1", "Type 2", "Type 3", "Type 4", "Type 5", "Type 6"]


for (let i = 0; i < 6; ++ i) {
    if (CallType(inputPage[i], inputRating[i]) != Result[i]) 
        console.log("Wrong!\n");
    else
        console.log("Correct\n");
}