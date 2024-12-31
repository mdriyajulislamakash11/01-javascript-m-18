// ================== module 18/1 ================= //
// 18_1 Compare variables and Comparison operator....
/**
 * COMPARITION
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. geater then or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * -----------------------
 * 7. and: &&
 * 8. or: ||
*/

/**
 * == : ekoi value,
 * === : ekoi man  ekoi type,
 * */



================== module 18/2 ================================================== //
8_2 Introduction to Conditionals...if or else

console.log(5 > 10);  //false
console.log(5 < 10);  //true
console.log(5 == 10);  //false
console.log(10 == 10);  //true
console.log(10 >= 10);  //true
console.log(15 >= 10);  //true
console.log(5 <= 10);  //true
console.log(10 > 10);  //false
console.log(10 < 10);  //false
console.log(100 <= 10);  //false
console.log(100 !== 10);  //true

// --------------------------------------


//  * == : ekoi value,
//  * === : ekoi man  ekoi type,
//  * 

console.log(10 == "10") //true
console.log(10 != "10") //false
console.log(10 !== "10") //false ekhane type o check korese
console.log(10 === "10") //false
console.log(10 == "akash") //false

-----------------------------------------




================== module 18/3 ==============================================//
8_3 If_else statement (visualization)

const name  = "akash";

if(name == "akash"){
      console.log("hello Akash, Wellcome,,,");
}else{
      console.log("sorry, i don't know you...")
}
----------------------------------------------------

const age = 13;

if(age >= 18){
      console.log("apni sob gulutei uthte parben..");
}else if(age >= 13){
      console.log("apni kichu kichu te uthte parben...");
}else{
      console.log("apni kono tatei uthte parben na...");
}
----------------------------------------------------

const student = 0; 

if(student >= 100){
      console.log("amra sobai ghurte jete parboo..");
}else if(student <= 90){
      console.log("koyekjon jete parbe...");
}else if(student <= 50){
      console.log("kew jete parbe na...");
}else{
      console.log("sobar chuti")
}
----------------------------------------------------

const age = 22;
const withAdult = false;

if(age >= 15){
      console.log("tmi melay dukte parbe..")
      if(withAdult == true){
            console.log("humm tmi vuter baritew dukte parbe...")
      }else{
            console.log("tmi vuter barite duktw parba na...")
      }
}else{
      console.log("tmi melate duktei parba na...hahahah")
}
----------------------------------------------------



================== module 18/4 ==============================================//
18_4 Conditional branching if Else Condition....

/********** STRUCTURE ****************/
if (conditon){

}else{

}


const weight = 12;

if(weight <= 20){
      console.log("i will carry by myself...");
}else{
      console.log("i will rent a riksaw...");
}



========================= module 18/5 ====================================== //
8_5 Multiple condition Logical Operators(&&, ||)

const salary = 25000;
const isBCS = true;

if(salary > 20000 && isBCS == true){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}
---------------------------------------------

const salary = 2000;
const isBCS = true;

if(salary > 20000 || isBCS == true){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}
//----------------------------


const salary = 5000;
const isBCS = false;
const height = 41;

if(salary > 20000 && isBCS == true || height > 55){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}
--------------------------------------------------

const salary = 53000;
const isBCS = false;
const height = 41;

if(salary > 20000 || isBCS == true || height > 55){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}
------------------------------------------

const salary = 53000;
const isBCS = true;
const height = 421;

if(salary > 20000 && isBCS == true && height > 55){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}
----------------------------------------------------

const salary = 53000;
const isBCS = true;
const isCar = true;

if((salary > 20000 && isBCS == true) || isCar > 55){
      console.log("su........patro")
}else{
      console.log("onno patro khuji")
}



================== module 18/6 ==============================================//
18_6 Multi level If-else if-else condition

DISCOUNT 

const price = 500;

if(price >= 5000){
      // 10% discount..
      const discount = price * 10 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount)
}else if(price >= 3000){
      // 7% discount
      const discount = price * 7 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount)
}else if(price >= 2000){
      // 5% discount 
      const discount = price * 5 / 1000;
      const payAmount = price - discount;
      console.log("payment", payAmount)
}else if(price >= 1000){
      // 3% discount
      const discount = price * 3 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount)
}else{
      console.log("taile mama full taka daw", price)
};
-------------------------------------------------------

const price = 1500;

if(price >= 5000){
      // 50% discount
      const discount = price * 50 / 100;
      const payAmount = price - discount;
      console.log("result", payAmount);
}else if(price >= 4000){
      // 40% discount
      const discount = price * 40 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount);
}else if(price >= 4000){
      // 30% discount
      const discount = price * 30 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount);
}else if(price >= 4000){
      // 20% discount
      const discount = price * 20 / 100;
      const payAmount = price - discount;
      console.log("payment", payAmount);
}else{
      console.log(price)
};
--------------------------------------------------------------------


const age = 12;
const price = 500;

if(age <= 12){
      console.log("tmi ekdom free te khabar paba...")
}else if(age >= 70){
      const discount = price * 70 / 100;
      const payAmount = price - discount;
      console.log(payAmount)
}else if(age >= 60){
      const discount = price * 60 / 100;
      const payAmount = price - discount;
      console.log(payAmount);
}else if(age >= 50){
      const discount = price * 50 / 100;
      const payAmount = price - discount;
      console.log(payAmount);
}else if(age >= 40){
      const discount = price * 40 / 100;
      const payAmount = price - discount;
      console.log(payAmount)
}else if(age >= 30){
      const discount = price * 30 / 100;
      const payAmount = price - discount;
      console.log(payAmount)
}else if (age >= 20){
      const discount = price * 20 / 100;
      const payAmount = price - discount;
      console.log(payAmount);
}else{
      console.log("ki ar korba full teha diya khaw")
};
----------------------------------------------------------------

const mony = 500;

if(mony >= 300){
      console.log("ami taile movie dekhum")
}else{
      console.log("ki ar korum muri khai boiya boiya")
}
-------------------------------------------------------




============================= module 18/7 ======================================//
18_7 (optional) Nested if-else condition..

const money = -90;

if(money >= 500){
      console.log("bro you are rich")
}else{
      if(money >= 300){
            console.log("tumi mota moti borolok")
      }else{
            if(money >= 100){
                  console.log("tmi borolok o na grib o na")
            }else{
                  if(money >= 0){
                        console.log("dosto tui kola kha celsium bara")
                  }else{
                        console.log("jah tui amar bondhui na tor kase teka nai")
                  }
            }
      }
}
-------------------------------------------




================== module 18/8 ====== ternary ==========================//
18_8 (advanced )If-else shorthand Ternary Operator
const age = 10;
if(age >= 18){
      console.log("aso babu vote daw...")
}else{
      console.log("jaw babu ghumai jaw")
};

ternary way te kora:
const age = 10;
age >= 18 ? console.log("jaw babu vote daw") : console.log("jaw babu ghumai jaw");

let price = 500;
const isLeader = false;

if(isLeader === true){
      price = 0;
}else{
      price = price + 100;
}
console.log(price)
----------------------------------------

let price = 500;
const isLeader = false;

price = isLeader === true ? 0 : price + 100;
console.log(price);
----------------------------------------------


let price = 500;
const isLeader = false;

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
-----------------------------------------------------



=========================== module 18/9 ============================//
18_9 (advanced) Logical Not Operator: !


const isPassed = true;

if(isPassed){
      console.log("valo koreso exam a")
}
else{
      console.log("valo koro nai exam a")
};
 -----------------------------------------

const isPassed = true;

if(!isPassed){
      console.log("valo koreso exam a");
}
else{
      console.log("valo koro nai exam a");
};
----------------------------------------------------

const isPassed = true;

if(!!isPassed){
      console.log("valo koreso exam a");
}
else{
      console.log("valo koro nai exam a");
};
--------------------------------------------------------------




================== module 18/10 =============================//
18_10 Homework and Making Decisions in your code

