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
//The function for doing the Bubble Sorting algorithm
function bubbleSort(anArray){
    console.log("test");
    for(var m=0; m<anArray.length; m++){
        for(var i=0; i<anArray.length; i++){
            if(anArray[i]> anArray[i+1]){
                var a = anArray[i];
                var b = anArray[i+1];
                // swaping a and b on the array
                //console.log(`comparing ${a} and ${b} and swapped them`);
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
//The function for doing the Selection Sorting algorithm
function selectionSort(anArray){  
    //console.log(anArray.length);
    for(var m=0;m<anArray.length; m++){
        var min = anArray[m];
        var minIndex = m;
        //console.log(`minimum is ${min} on the ${m}th iteration`)
        for(var i=m; i<anArray.length; i++){
            //console.log(`M IS ${m} and i is ${i}`);
            if(min>=anArray[i]){
                min=anArray[i];
                minIndex = i;
                //console.log(`the new minimum is ${min}`)
                //console.log("found a new minimum at index: "+ i+ "which is "+min);
            }
        }
        // swapping the m'th element and the new minimum so that the minimum will be pushed to the start of the array
        var a = minIndex;
        var b = anArray[m];
        anArray[a] = b;
        anArray[m] = min;
        //console.log(`when the ${m}th iteration is done the minimum is${min}`);
        //console.log(`beause the minimum is ${min} im swapping its position which is at index ${a} with index${m}`)
        //console.log(`the new arrau looks like this ${anArray}`);

        //actual swapping on the visualizer html
        var styleOfa = document.getElementById(`${a}`).offsetHeight;
        //console.log(`the height of element ${a} is ${styleOfa}`);
        var styleOfb = document.getElementById(`${m}`).offsetHeight;
        //console.log(`the height of element ${m} is ${styleOfb}`);
        document.getElementById(`${m}`).setAttribute("style", `height:${styleOfa}px`); 
        document.getElementById(`${a}`).setAttribute("style", `height:${styleOfb}px`);
    }
    
    console.log(anArray);
    
}
//The function for doing the Quick Sorting algorithm
function quickSort(anArray){

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

