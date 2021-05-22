var x= 0
var namesarray=[]
var timearray=[]
counter=1
var roster=""
chrome.runtime.onMessage.addListener(function (request) {
  players= document.getElementsByClassName('ZjFb7c')
  var names=players[0].innerText
  if(names!=null){
    counter=counter+1
  }
  
if(counter==2){
  var i = 1;                  //  set your counter to 1
    function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      
     
      
      players = document.getElementsByClassName('wnPUne N0PJ8e')[0].innerText 
      var s= parseInt(players)
      var k;
      var names;



       for(k=0;k<s;k++){
        players= document.getElementsByClassName('ZjFb7c')
        names=players[k].innerText
 
        if(namesarray.includes(names)==1){
            for(x=0;x<s;x++){
              if(namesarray[x]==names){
                timearray[x]=timearray[x]+3
              }
            }
            
        }
        if(namesarray.includes(names)==0){
          namesarray.push(names)
          timearray.push(3)
        }       
       }
       var x;
       roster=""
       for(x=0;x<s;x++){
         if(timearray[x]>60){
         roster =roster + namesarray[x]+" Attentive for: "+timearray[x]/60+" Minutes" + "\n"
         } else{
          roster =roster + namesarray[x]+" Attentive for: "+timearray[x]+" Seconds" + "\n"
         }       
        }
       
      
      
      
      

      
      //  your code here
      i++;                    //  increment the counter
             //  if the counter < 10, call the loop function
        myLoop();             //  ..  again which will trigger another 
                       //  ..  setTimeout()
    }, 3000)
  }
  
myLoop(); 
}


if(counter!==2){
  alert(roster)
    
  }
 
  



 
 })