const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = [];
let password2 = [];
let i, n;
let randomNum;
let outputEl1 = document.getElementById("output1");
let outputEl2 = document.getElementById("output2");

function generateTwoPassword() {
    password1 = [];
    outputEl1.textContent =password1;
    for(i=0; i<15; i++)
    {
        randomNum = Math.floor(Math.random()*94) + 33;
        if(randomNum === 59 || randomNum=== 58 || randomNum=== 39 || randomNum=== 34 || randomNum=== 96 || randomNum=== 60 || randomNum=== 62){ // better to exclude this symbols
            for(n=0; randomNum==59 || randomNum==58 || randomNum=== 39 || randomNum=== 34 || randomNum=== 96; n++)
                randomNum = Math.floor(Math.random()*94) + 33;
        }
        password1[i]= String.fromCharCode(randomNum);
        outputEl1.textContent += password1[i];
    }
    password2 = [];
    outputEl2.textContent =password2;
    for(i=0; i<15; i++)
    {
        randomNum = Math.floor(Math.random()*94) + 33;
        if(randomNum === 59 || randomNum=== 58 || randomNum=== 39 || randomNum=== 34 || randomNum=== 96 || randomNum=== 60 || randomNum=== 62){ // better to exclude this symbols
            for(n=0; randomNum==59 || randomNum==58 || randomNum=== 39 || randomNum=== 34 || randomNum=== 96; n++)
                randomNum = Math.floor(Math.random()*94) + 33;
        }
        password2[i]= String.fromCharCode(randomNum);
        outputEl2.textContent += password2[i];
    }
}