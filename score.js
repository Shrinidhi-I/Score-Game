const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const resetButton=document.querySelector('#Reset');
const p2Display=document.querySelector('#p2Display');
const p1Display=document.querySelector('#p1Display');
const playtoselect=document.querySelector('#playto');
let p1Score=0;
let p2Score=0;
let winningScore=3;
let isGameover=false;
function updateScores(score,button,display){

}
p1Button.addEventListener('click',function(){
   
    if(!isGameover){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameover=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent=p1Score;
    }
})
// p2Button.addEventListener('click',function(){
//     if(p2Score!==winningScore)  {
//       p2Score+=1;
//       p2Display.textContent=p2Score;}
// })
p2Button.addEventListener('click',function(){
    if(!isGameover){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameover=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent=p2Score;}
})
playtoselect.addEventListener('change',function(){
     winningScore=parseInt(this.value);
     reset();
})
resetButton.addEventListener('click',reset);
function reset(){
    isGameover=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('loser','winner');
}