// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // Convert to map for easy insertion ( No double loops BROTHER )
    let curInvMap = new Map();
    for(let i in arr1){
        curInvMap.set(arr1[i][1], arr1[i][0]);
    }

    for(let item in arr2) {
        let currentItem = arr2[item]; // get the itemkey
        let currentItemValue = curInvMap.get(currentItem[1]);

        if( currentItemValue != undefined ) {
            currentItemValue += currentItem[0];
            curInvMap.set(currentItem[1], currentItemValue);
        } else {
            curInvMap.set(currentItem[1], currentItem[0]);
        }
    }

    let temp = [];
    for( let [key,value] of curInvMap ) {
        temp.push([value, key]);
    }

    temp.sort(customSort);    
    console.log(temp);

    return temp;
}

function customSort(a, b) {
    if(a[1] < b[1]) {
        return -1
    } 

    return 1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);