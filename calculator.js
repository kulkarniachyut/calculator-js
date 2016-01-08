var digitsArray = [];
var digitSymArray =[];
var symArray =[];
function num(numberValue){
    
    var numValue = numberValue.value;
//    console.log(numValue);
    digitSymArray.push(numValue);
//    console.log(digitSymArray);
    if (isNaN(numValue))
        
        {
            symArray.push(numValue);
//            console.log(symArray);
        }
    else{
        digitsArray.push(numValue);
//        console.log(digitsArray);
        }
}

function findLeftDigits( a , leftDigitArray){
    
     for (var i = 1; i< digitSymArray.length ; i++){
//               
                
                if(isNaN(digitSymArray[a-i])){
                    
                    if(((a-i)<0)){
                    leftDigitArray = digitSymArray.slice(0,a);
                    break;
                    }
                    else{
                        leftDigitArray = digitSymArray.slice((a-i+1),(a));
                        break;
                        
                    }
                   
//                    
                }
             
             
//                    console.log(leftDigitArray);
//                    console.log(rightDigitArray);
                
          }
    
            console.log(leftDigitArray);
            leftDigit = parseInt((leftDigitArray).join(""));
            console.log(leftDigit);
            return leftDigit ;
    
    
    
}



function findRightDigits(a,rightDigitArray){
        
            
    //console.log(a);
     //console.log(digitSymArray.length);
     for (var i = a+2; i<(digitSymArray.length) ; i++){
//               
//                console.log(digitSymArray[a+i]);
              if(isNaN(digitSymArray[i])){
                 console.log("found a symbol");
                 rightDigitArray = digitSymArray.slice(a+1,i);
                 }
               if ( i ==((digitSymArray.length)-1) ){
                   
                   rightDigitArray = digitSymArray.slice(a+1,(digitSymArray.length)+1);
               }
//                  
                
          }
//    
            console.log(rightDigitArray);
            rightDigit = parseInt((rightDigitArray).join(""));
            console.log(rightDigit);
            return rightDigit ;
    
}
function clear(){ 

   document.getElementById("result").innerHTML = "cleared";
}



function res(){
    
    var a = digitSymArray.indexOf("*");
    var leftDigitArray = [];
    var rightDigitArray = [];
    
     if(isNaN(digitSymArray[a-1]) || isNaN(digitSymArray[a+1])){
        console.log("Not a correct number inserted");
        } 
    
    else {
        
        var leftDigit = findLeftDigits(a,leftDigitArray);
        var righDigit = findRightDigits(a,rightDigitArray);
        var res = leftDigit * righDigit;
        document.getElementById("result").innerHTML = res;
        }
       
    
    
}