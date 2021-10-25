function CallType(Page, Rating) {
    if (Number(Page) < 0 || Number(Page) > 2000 || Number(Rating) < 0 || Number(Rating) > 10 || Number(Page) == NaN || Number(Rating) == NaN)
        return ("Khong hop le!");

    if (Number(Page) < 200) {
        if (Number(Rating) < 7) {
            return "Type 1";
        }
        else 
            return "Type 4";
    }
    else if (Number(Page) < 500) {
        if (Number(Rating) < 7) {
            return "Type 2";
        }
        else 
            return "Type 5";
    } 
    else if (Number(Page) >= 500) {
        if (Number(Rating) < 7) {
            return "Type 3";
        }
        else 
            return "Type 6";
    }


};

// console.log(CallType(600, 7));

module.exports = CallType;