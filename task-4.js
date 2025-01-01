/**
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// const myScore = 30;
// const fndScore = 45;

// if(myScore > 80){
//       if(fndScore >= 80){
//             console.log("colo bondhu lunche korte jai.")
//       }else{
//             if(fndScore >= 60 && fndScore <= 80){
//                   console.log("good luck next time.")
//             }else{
//                   if(fndScore >= 40 && fndScore <= 60){
//                         console.log("ami tor msg seen e korum na.")
//                   }else{
//                         if(fndScore < 40){
//                               console.log("ami tore block e kore dibo")
//                         }else{
//                               console.log("thak tmi ar amre jalayo na.")
//                         }
//                   }
//             }
//       }
// }else{
//       if(myScore < 80){
//             console.log("ami ar ki korum jai bait jai ar mon kharap koira boisa thaki abba hunle pithaibo")
//       }
// };


const myScore = 76;
const fndScore = 43;

if(myScore > 80){
      if(fndScore > 80 ){
            console.log("col bonfhu lunche korbo.")
      }else if(fndScore >=60 && fndScore <= 80){
            console.log("good luck next time.")
      }else if(fndScore > 40 && fndScore < 60){
            console.log("sala ami tor msg e seen korum na.")
      }else if(fndScore < 40){
            console.log("jah tore ami block dilam.");
      }else{
            console.log("valo koira pora lekha kor...")
      };
}else if(myScore < 80){
      console.log("basay jaya mon kharap koira suya thakum.")
}else{
      console.log("ami to exam e dei nai...")
}

