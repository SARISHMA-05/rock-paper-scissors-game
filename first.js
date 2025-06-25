/*const profile={
    name:"sarishma",
    post:195,
    followers:596,
    job:"ex-microsoft",
    isfollow:false


}
console.log( typeof profile["name"])*/
// let a=5;
// let b=3;
// console.log("a=",a,"&b=",b);
// console.log("a+b=",a);
/*let num=prompt("enter a number");
if (num%5==0){
console.log( num,"=num is multiple of 5" );
}
else{
    console.log(num,"is a not multiple of 5")
}*/
/*let a= prompt("enter the score");
if(a<=100 && a>=90){
    console.log("student got A grade");
}
else if(a<=89 && a>=70){
    console.log("student got B grade");
}
else if(a<=69 && a>=60){
    console.log("student got c grade");
}
else if(a<=59 && a>=50){
    console.log("student got D grade");
}
else if(a<=49){
    console.log("student got f grade");
}*/
// for(var i=1;i<=5;i++){
//     console.log("i=",i);
// }
// for(let num=1;num<100;num++){
//     if(num%2==0){
//         console.log("num is ",num);
//     }
// }
// while(num<100){
//     if (num%2==0){
//         console.log("num is",num)
//     }
// }
// gamenumber=45;
// usernumber=prompt("guess the gamenumber");
// if (gamenumber==usernumber){
//     console.log("congratutaions you entered correct number");
// }
// else{
//     console.log("you entered wrong number");
// }
// console.log("apnacollege");
/*let marks=[85,97,44,37,76,60];
sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);*/
/*let items=[200,300,400,500,600];
for(let i=0;i<items.length;i++){
    console.log(`the index${i}=${items[i]}`)

offer=items[i]/10;
items[i]=items[i]-offer;
console.log(`the index${i}=${items[i]}`);
}*/
/*ages=[12,13,14,15]
ages.push(18)
console.log(`the new updated ages are${ages}`);
deleted=ages.pop()
console.log(`the new updated ages are${ages}`);
console.log(`the deleted items are${deleted}`);*/
// campanies=["bloomberg","microsoft","google","tcs","netflix"]
// campanies.shift();
// console.log(campanies)
// a=campanies.splice(2,1,"wipro")
// campanies.push("amazon")
// console.log(campanies)
// function countVowels(str){
//      let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"|| char==="i"|| char==="o"|| char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// let arr=["sarishma","shanmukh","swapna","srinivasrao"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(), idx,arr);
// });
// let Arr =[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);

// })
// let nums=[6,7,8,9,10];
// let calsquare=(nums)=>{
//     console.log(nums*nums)
// }
// nums.forEach(calsquare);
// let arr=[1,2,3,4,5,6,7,8,9];
// let evenarr= arr.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(evenarr);
// let arr =[45,68,90,98,67,94];
// let topper=arr.filter((val)=>{
//     return val>90;
// });
// console.log(topper)

// let n=prompt("enter a number ");
// let arr=[]
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;

// })
// console.log(sum)
// let pro=arr.reduce((pro,curr)=>{
//     return pro*curr
// })
// console.log(pro)
// let h2= document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"from apna college";
// let divs=document.querySelectorAll(".box");
// idx=1;
// for(div of divs){
//     div.innerText=div.innerText + `hello!${idx}`;
//     idx++;
// }
// let div=document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let div=document.querySelector("div")
// div.style.backgroundColor="red";
// let btn=document.createElement("button");
// btn.innerText="click me";
// console.log(btn);
// let div=document.querySelector("div");
// div.after(btn);
// let newhead=document.createElement("h2");
// newhead.innerHTML="<i>hi i am new to this</i>"
// document.querySelector("button").prepend(newhead)
// let newbtn=document.createElement("button");
// newbtn.innerHTML=("clickMe");
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);
// let mod=document.querySelector("#mode");
// let currmod="light";
// mod.addEventListener("click",()=>{
//     if (currmod==="light"){
//         currmod="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmod="light";
//         document.querySelector("body").style.backgroundColor="white";

//     }
//     console.log(currmod);
// })
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user");
const compscorePara=document.querySelector("#comp")
const compchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="game is draw play again!";
    msg.style.backgroundColor="green";
    
};
const showWinner=(userwin,user,computerchoice)=>{
    if(userwin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText="you loose";
        msg.style.backgroundColor="red";
    }
};
const playGame=(user)=>{
    console.log("user choice is =", user);
    const computerchoice=compchoice();
    console.log("the comp choice is=",computerchoice);
    if(user==computerchoice){
        drawGame();
    }else{
        let userwin=true;
        if (user==="rock"){
            userwin= computerchoice==="paper"? false: true;
        }else if(user=="paper"){
            userwin= computerchoice==="scissors"? false: true;
        }else{
            userwin= computerchoice==="rock"? false: true;
        }
        showWinner(userwin,user,computerchoice);
    }
};  

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user=choice.getAttribute("id");
        playGame(user);
    });

});