// event listener
const latinInput = document.getElementById("latinInput");
const romanInput = document.getElementById("romanInput");

latinInput.addEventListener("input",(e)=>{
  romanInput.value = latinToRoman(e.target.value);
});
romanInput.addEventListener("input",(e)=>{
  latinInput.value = romanToLatin(e.target.value);

});

function latinToRoman(number){
  let roman = "";
  const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
  let a;
  if(number > 3999)
    return "Enter number between 1 to 3999";
  else if (number == 0)
    return "nulla";
  else{
    for(let key in romanNumList){
        a = Math.floor(number / romanNumList[key]);
        if(a >= 0){
            for(let i = 0; i < a; i++){
              roman += key;
            }
          }
        number = number % romanNumList[key];
    }
  }

  return roman;
}
function romanToLatin(romanNumber){
  const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }
  return num;
}
// function romanToArabic(romanNumber){
//   let result = 0, index;
//   const romanNum = ['M','CM',"D","CD","C","L","XV","X","V","IV","I"];
//   const arabicNum =[100,900,500,100,90,50,10,5,4,1];
//     for(let key in romanNum){
//       console.log(romanNum[key]);
//       index = romanNumber.indexOf(romanNum[key]);
//       if(index != -1){
//         result += arabicNum[key];
//         console.log(arabicNum[key]);
//         romanNumber = romanNumber.replace(romanNum[key], "0");
//         // console.log(romanNumber);
//         // console.log(result);
//       }
//     }
//     console.log(result);
// }

//romanToArabic("CCXLVI");
