let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

// 6
const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
// 1
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("The button is clicked");
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled= true;
        checkWinner();
    });
});

// 4
const disabledBoxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
// 5
const enabledBoxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// 3
const winner = (winner)=>{
    msg.innerText =`Congratulations! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

// 2
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                winner(pos1Val);
            }
        }
    }
};

// 7
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);