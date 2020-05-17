let firstWord = "ABCDE";
let expectedWord = "CDEAB";
let midlWord;
console.log(firstWord.length);
let lengthOfFirstWord=firstWord.length;

for (let i = 0; i < lengthOfFirstWord; i++) {
    console.log(i);
    midlWord=firstWord.slice(1,5) + firstWord.charAt(0);
    console.log(midlWord);
    firstWord=midlWord;
    if(firstWord==expectedWord){
        console.log('true')
        return true
    };
}
