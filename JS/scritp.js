

function createElement(tagName, className='' ,id='' ,attribute={})
{
    const elem = document.createElement(tagName);
    if(id)
    {
        elem.id = id;
    }
    if(className)
    {
        elem.className = className;
    }
    for(let attributeName of Object.keys(attribute))
    {
        elem.setAttribute(attributeName,attribute[attributeName]);
    }
    
    return elem;
}



const div = createElement('div','container');
document.body.append(div);
const div0 = createElement('div','Error Message')
div.append(div0);
const div1 = createElement('div','','calculator');
div.append(div1)
div1.append(createElement('input' ,'','display',
{
    type:'text',
    disable:''
    
}))
div1.append(createElement('br'))
div1.append(createElement('button','','btn1',{onclick:"appendToDisplay('1')"}));
div1.append(createElement('button','','btn2',{onclick:"appendToDisplay('2')"}));
div1.append(createElement('button','','btn3',{onclick:"appendToDisplay('3')"}));
div1.append(createElement('button','','btnPlus',{onclick:"appendToDisplay('+')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','btn4',{onclick:"appendToDisplay('4')"}));
div1.append(createElement('button','','btn5',{onclick:"appendToDisplay('5')"}));
div1.append(createElement('button','','btn6',{onclick:"appendToDisplay('6')"}));
div1.append(createElement('button','','btnMinus',{onclick:"appendToDisplay('-')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','btn7',{onclick:"appendToDisplay('7')"}));
div1.append(createElement('button','','btn8',{onclick:"appendToDisplay('8')"}));
div1.append(createElement('button','','btn9',{onclick:"appendToDisplay('9')"}));
div1.append(createElement('button','','btnMulti',{onclick:"appendToDisplay('*')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','btnc',{onclick:"clearDisplay()"}));
div1.append(createElement('button','','btn0',{onclick:"appendToDisplay('0')"}));
div1.append(createElement('button','','btnDot',{onclick:"appendToDisplay('.')"}));
div1.append(createElement('button','','btnDiv',{onclick:"appendToDisplay('/')"}));
div1.append(createElement('br'))
div1.append(createElement('button','result','btnRes',{onclick:"calculateResult()"}));


const btn1 = document.getElementById('btn1');
btn1.innerText = '1';
const btn2 = document.getElementById('btn2');
btn2.innerText = '2';
const btn3 = document.getElementById('btn3');
btn3.innerText = '3';
const btn4 = document.getElementById('btn4');
btn4.innerText = '4';
const btn5 = document.getElementById('btn5');
btn5.innerText = '5';
const btn6 = document.getElementById('btn6');
btn6.innerText = '6';
const btn7 = document.getElementById('btn7');
btn7.innerText = '7';
const btn8 = document.getElementById('btn8');
btn8.innerText = '8';
const btn9 = document.getElementById('btn9');
btn9.innerText = '9';
const btn0 = document.getElementById('btn0');
btn0.innerText = '0';
const btnPlus = document.getElementById('btnPlus');
btnPlus.innerText = '+';
const btnMinus = document.getElementById('btnMinus');
btnMinus.innerText = '-';
const btnMulti = document.getElementById('btnMulti');
btnMulti.innerText = 'X';
const btnDiv = document.getElementById('btnDiv');
btnDiv.innerText = '/';
const btnDot = document.getElementById('btnDot');
btnDot.innerText = '.';
const btnc = document.getElementById('btnc');
btnc.innerText = 'C';
const btnRes = document.getElementById('btnRes');
btnRes.innerText = '=';









function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult(){
    let value = 0;
    value = eval(document.getElementById('display').value); 
    document.getElementById('display').value = value;
}

let exp=0;
window.addEventListener("keypress", (event) => {
    const allowedOperators = ["-", "+", "/", "*", "="];
    const allowedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const key = event.key;

    if (key === '=') {
        
        const result = evalExp(exp);
        if (result !== null) {
            exp = '';  
        } else {
            
            alert("Error: Invalid expression");
            exp = '';  
        }
    } else if (allowedOperators.includes(key) || allowedNumbers.includes(key)) {
        
        exp += key;
    } else {
        
        alert("Only numbers and operators (+, -, *, /) are allowed!");
    }
});




function evalExp(exp) {
    
        let value =eval(exp);
        document.getElementById('display').value = value;
    
    }

 
 

 








