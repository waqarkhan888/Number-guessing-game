
// number variable

let number;
// random function

 let waqar=()=>{
   let n1=  Math.random()

//    we want one digit number 0 to 5 so
 let n2 = n1*5

//  after . point all value remove so use trunc
n2 = Math.trunc(n2);  
 n2 = (n2 % 5) + 1

//  % is mode
 
  number = n2;
  console.log(number);

 }
//  waqar();

let generate=()=>{
 
  document.querySelector("#section1").style.display="none";
  document.querySelector("#section2").style.display="none";
  document.querySelector("#section3").style.display="block";

setTimeout(() => {
  waqar();

  document.querySelector("#input").value="";

  document.querySelector("#section1").style.display="none";
  document.querySelector("#section2").style.display="block";
  document.querySelector("#section3").style.display="none";

}, 2000);

}

// check number  

let check=()=>{
  let value=document.querySelector("#input").value
   if(value==number)
   {
     alert("Congrates, You won the game");
   }else{
     alert("OOPS !! Your guess is wrong...");
   }
   generate();
}





