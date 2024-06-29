let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector((".msg-container"));
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame =() => {
    turn0 = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText ="O";
            turn0=false;
        }else{
            box.innerText ="X";
            turn0=true;
        }
        box.disabled =true;

        checkwinner();
    });
});

const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congradulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner =() => {
    for (let pattern of winpattern) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if ( posVal1=== posVal2 && posVal1===posVal3){
                console.log("winner",posVal1);
                console.log("hello");
                showWinner(posVal1);

            }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);