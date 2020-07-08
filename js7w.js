
let numberPlayers
let pts=[];

let BROWSER = "User-agent header sent: " + navigator.appVersion;

  datum = new Date();
  date.innerHTML = datum;
  versionstring = " Version # v"
versionnumber = 0.4;
VERSION.innerHTML =  BROWSER+ versionstring+versionnumber;

function sumPTS(number1, number2, number3, number4, number5, number6 , number7) {
      let sum = parseInt(number1)+parseInt(number2)+parseInt(number3)+parseInt(number4)+parseInt(number5)+parseInt(number6)+parseInt(number7);
      console.log(("Result: "+ sum));
      return sum;
  }

  function updatePTS(index, number) {
    
    pts[index]=number;
    output = document.getElementById("output");

      console.log(("Results: "+ pts));      
      //document.getElementById(Result).innerHTML = sum;
      
  }

function calcRnD(cat1, cat2, cat3){
  let numSet = (7*(Math.min( cat1, cat2, cat3)));
  console.log("points from set: "+ numSet)
  let numCat = cat1*cat1 + cat2*cat2 + cat3*cat3;
  console.log("points from Cat: "+ numCat)
  let numSum = numSet + numCat;
  console.log("points from RnD: "+ numSum);
  return numSum;  
}

function toggleGreenDetail(toggleID) {
  let x = document.getElementById(toggleID);
//  let view = document.getElementsByClassName('toggleView');
  let y = document.getElementById("input7");

  if (x.style.display === "none") {
    x.style.display = "block";
    //y.disabled = true;
  } else {
    x.style.display = "none";
    //y.disabled = false;
  }

}
