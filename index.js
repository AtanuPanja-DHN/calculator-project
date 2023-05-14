// console.log(text ? text : e.target.innerHTML);
// 			if (text && text != '=' && text != 'CE' && text != 'C' && text != '+/-' && text != '.') {
// 				str += text;
// 				screen.value = str;
// 			}
// 			else if (text && text === '=') {
// 				if (str) {
// 					let result = eval(str);
// 					str = "";
// 					screen.value = result;
// 				}
// 				else {
// 					console.log("Empty expression");
// 				}
// 			}
// 			else if (text === 'C') {
// 				str = "";
// 				screen.value = str;
// 			}
let operators = /[+*-\/]/;
// console.log(operators.test("/"));
let decimalPoint = /\./;
console.log(decimalPoint.test("."));
console.log("." === ".");
console.log("89.5.".search(decimalPoint)); // some index > -1
console.log("99".search(decimalPoint));
let buttons = document.getElementsByClassName("btn");
const screen = document.getElementById("screen");
let switchedOn = false;
let onButton = document.getElementById("on");
// let negative = false;

console.log(buttons);
// for(let button of buttons){
//     button.addEventListener("click",)
// }
for (let button of buttons) {
    let shadow;
    // button.addEventListener('click', (e) => {
    // });
    button.addEventListener('mousedown',(e)=>{
        shadow = button.style.boxShadow;
        button.style.boxShadow = "0px 0 0 0";
        setInterval(() => {
            button.style.boxShadow = shadow;
        }, 50);
        // button.style.boxShadow = shadow;

        let text = e.target.innerHTML;
        console.log(text);
        if(text === "ON"){
            switchedOn = true;
            onButton.innerHTML = "OFF";
            screen.value = "0";
        }
        else if(text === "OFF"){
            switchedOn = false;
            onButton.innerHTML = "ON";
            screen.value = "";
        }
        else{
            // do nothing
        }

        if(switchedOn){
            if(text === "."){ // this logic was written after all other buttons
                // but it is placed before all, because somehow, it does not match the condition if placed after all the other conditions.
                console.log("Hello I am a point");
                if(screen.value.indexOf(".") == -1){
                    screen.value += text;
                }
            }
            else if(text === "DEL"){
                if((/\d+\.{0,1}/).test(screen.value)){
                    screen.value = screen.value.slice(0,-1);
                    if(screen.value.length == 0){
                        screen.value = "0";
                        negative = false;
                    }
                }
                else{
                    screen.value = "0";
                }
            }
            else if(text === "AC"){
                screen.value = "0";
                negative = false;
            }
            else if(text === "ON"){
                // do nothing
            }
            // more conditions to be added
            else if(text === "="){
                screen.value = eval(screen.value);
            }
            else if(text === "+/-"){
                if(screen.value > 0){
                    screen.value = "-"+screen.value;
                }
                else if(screen.value < 0){
                    screen.value = screen.value.substring(1);
                }
            }
            else if(operators.test(text)){ // if text is + or - or * or /
                if(screen.value.search(operators) == (screen.value.length - 1)){
                    screen.value = screen.value.slice(0,-1) + text;
                }
                else{
                    screen.value += text;
                }
            }
            else{
                if(screen.value === "0")
                    screen.value = "";
                screen.value += text;
            }
        }
    })
    // it.addEventListener('mouseup',()=>{
    // 	it.style.boxShadow = shadow;
    // })
}