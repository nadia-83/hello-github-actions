function getMissingData(array) {
    let myArray = new Array();
    myArray = array;
    // myArray.sort(
    let iterator = 0;
    let numberToCompare = 0;
    while ((myArray[iterator] == numberToCompare) & (iterator < myArray.length)) {
        numberToCompare++;
        iterator++;
    }

    
    console.log('Number is found: ' + numberToCompare);
}

