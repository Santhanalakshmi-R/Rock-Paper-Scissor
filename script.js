
    let score={
      win:0,loss:0,die:0
    };
 
    function clr(){
      console.log('jo');
      score.win=0;
      score.loss=0
      score.die=0;
      document.querySelector('.js-score').innerHTML=` wins: ${score.win} losses:${score.loss} dies:${score.die}`;
      
    }
 
    function comp_move(){
    computer=Math.floor(Math.random()*3+1);
    if(computer==1){
      cMove="rock";
    }
    else if(computer==2){
      cMove="paper";
    }
    else{
      cMove='scissor';
    }
    return cMove;
  }
    function playGame(playerMove){
      computerMove=comp_move();
      if(playerMove=="rock"){
        if(computerMove=="rock"){
          result='die';
        }
        else if(computerMove=="paper"){
          result='loss';
        }
        else{
          result='win';
        }
      }
     else if(playerMove=="paper"){
        if(computerMove=="rock"){
          result='win';
        }
        else if(computerMove=="paper"){
          result='die';
        }
        else{
          result='loss';
        }
      }
    else{
      if(computerMove=="rock"){
          result='loss';
        }
        else if(computerMove=="paper"){
          result='win';
        }
        else{
          result='die';
        }
    }
    if(result=='win'){
      score.win+=1;
    }
    else if(result=='loss'){
      score.loss+=1;
    }
    else{
      score.die+=1
    }
    localStorage.getItem('score');
    document.querySelector('.js-score').innerHTML=` wins: ${score.win} losses:${score.loss} dies:${score.die}`;
    document.querySelector('.js-result').innerText="you "+result;
   
    document.querySelector('.js-moves').innerHTML=`You 
    <img src="${playerMove}.png"> Computer <img src="${computerMove}.png">`;
    
    }
    
 