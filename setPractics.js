 const morze = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
 const englishAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z']; 
 console.log(morze); 
 console.log(englishAlphabet);
 const map = new Map();
 const morzeSize = morze.length;
 let i = 0;
for (i = 0; i < morzeSize; i++) {
     map.set(englishAlphabet[i], morze[i]);
     //console.log (map.get(i));
}
console.log (map);


