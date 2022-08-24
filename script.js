var newArray = [];
function arrayGenerator(arrayLength){
     var randomArray=[];
     document.querySelector(".main").innerHTML =``
     for(var i=0; i<arrayLength; i++){
         var randomNumber = Math.ceil((Math.random()*50));
         randomArray.push(randomNumber)
         document.querySelector(".main").innerHTML += 
          `<div class="rectangle" id='${i}' style= "height:${randomNumber*2}px" ></div>`;
     }
     console.log(randomArray);
     newArray = randomArray
     
     return randomArray;
}
function bubbleSort(anArray){
    console.log("test");
    for(var m=0; m<anArray.length; m++){
        for(var i=0; i<anArray.length; i++){
            if(anArray[i]> anArray[i+1]){
                
                
                var a = anArray[i];
                var b = anArray[i+1];
                console.log(`comparing ${a} and ${b} and swapped them`);
                anArray[i] = b;
                anArray[i+1] = a; 
                
                //actual swapping on the visualizer html
                var styleOfa = document.getElementById(`${i}`).offsetHeight;
                console.log(`the height of element ${i} is ${styleOfa}`);
                var styleOfb = document.getElementById(`${(i)+1}`).offsetHeight;
                console.log(`the height of element ${i+1} is ${styleOfb}`);
                document.getElementById(`${i}`).setAttribute("style", `height:${styleOfb}px`); 
                
                document.getElementById(`${i+1}`).setAttribute("style", `height:${styleOfa}px`); 
                

            }
            else{
                continue
                
            }
        }
    }
    console.log(`sorted array ${anArray}`)
    return anArray;
}
function selectionSort(anArray){    
    for(var m=0;m<anArray.length; m++){
        var min = anArray[m];
        for(i = m+1; i<anArray.length; i++){
            if(min>=anArray[index]){
                min=anArray[index];
            }
        }
        var a = anArray.indexOf(min);
        var b = anArray[index];
        anArray[a] = b;
        anArray[index] = min;
        index += index;
    }
    
    console.log(anArray);
    /*var sortedArray = [];
    for(var m=0; m<anArray.length; m++){
        var minimum=anArray[m];
        for(var i=0; i<anArray.length; i++){
            if(anArray[i]<minimum){
                minimum = anArray[i];
            }  
        }
        var a = anArray[m];
        var b = anArray.indexOf(minimum);
        anArray[m] = b;
        anArray[b] = a;
        console.log(anArray);
    }
    console.log(`sorted array ${sortedArray}`)
    return sortedArray;
    */
}

document.querySelector("#selectionSort").addEventListener('click', event => {
    selectionSort(newArray);
  });
document.querySelector("#bubbleSort").addEventListener('click', event => {
    bubbleSort(newArray);
  });
// the delay logic is down below
function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}

