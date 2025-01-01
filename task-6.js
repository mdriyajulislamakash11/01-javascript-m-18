/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ticket = 800;
const age = 77;
const isStudent = false;

if(age < 10){
      console.log("your ticket is free.")
}else if(age >= 60){
      // 15% discount
      const discount = ticket * 15 / 100;
      const payment = ticket - discount;
      console.log("tmi Senior citizens tai tmr 15% discount pabe :", payment)
}else if(isStudent){
      // 50% discount
      const discount = ticket * 50 / 100;
      const payment = ticket - discount;
      console.log("tmi student tai tumi 50% discount pabe :", payment)
}else{
      console.log("tmi ticket er puro takai diba :", ticket)
}