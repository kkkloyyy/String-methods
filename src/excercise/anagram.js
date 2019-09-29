const str1= "";
const str2 = str1.toLowerCase();


var isAnagram = function(word,caseSensitive){
    if (typeof word !== "string"){
        console.log("please enter a string")
        return false
    }

    let toTest

    if (caseSensitive){
        toTest=word
        
    }else{
        toTest=word.toLowerCase()
    }

    
    const splitString = toTest.split("");
    const reverse = splitString.reverse();
    const str4 = reverse.join("");
    if (str2===str4){
        return true
    }else{
        return false
    }

}
console.log(isAnagram(2333))

var isAnagram=function(word){
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
}
console.log(isAnagram("Hello"))