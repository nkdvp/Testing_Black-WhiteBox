const CallType = require("../app");

// kiểm tra theo độ phủ cấp 2

/* Ta có các test case để phủ toàn bộ các nhánh là 
(page, Rating) = (-1, 10), (160, 5), (140, 9), (300, 4), (400, 9), (800, 3), (1200, 10)
 */

let inputPage = [-1, 160, 140, 300, 400, 800, 1200];
let inputRating = [10, 5, 9, 4, 9, 3, 10];
let Result = ["Khong hop le!", "Type 1", "Type 4", "Type 2", "Type 5", "Type 3", "Type 6"]


for (let i = 0; i < 7; ++ i) {
    if (CallType(inputPage[i], inputRating[i]) != Result[i]) 
        console.log("Wrong!\n");
    else
        console.log("Correct\n");
}
