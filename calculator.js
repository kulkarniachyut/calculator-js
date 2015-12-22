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


function res(){
    
    var a = digitSymArray.indexOf("*");
    var leftDigitArray = [];
//    var rightDigitArray = [];
    
     if(isNaN(digitSymArray[a-1]) || isNaN(digitSymArray[a+1])){
        console.log("Not a correct number inserted");
        } 
    
    else {
        
         for (var i = 1; i< digitSymArray.length ; i++){
//                var leftIndex = digitSymArray.indexOf("*"||"+"||"-"||"/");
                
                if(isNaN(digitSymArray[a-i])){
                    
                    if(((a-i)<0)){
                    leftDigitArray = digitSymArray.slice(0,a);
                    break;
                    }
                    else{
                        leftDigitArray = digitSymArray.slice((a-i+1),(a));
                        break;
                        
                    }
                   
//                    console.log(leftDigit);
                }
             
             
//                    console.log(leftDigitArray);
//                    console.log(rightDigitArray);
                
          }
            console.log(leftDigitArray);
            leftDigit = parseInt((leftDigitArray).join(""));
            console.log(leftDigit);
            
        
        
        }
       
    
    
}