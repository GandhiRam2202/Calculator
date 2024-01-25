

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



const div = createElement('div','container text-center');
document.body.append(div);



const p = createElement('p','','description')
div.append(p);
p.innerText='DOM Manipulation Calculator'


const h1 = createElement('h1','','title')
div.append(h1);
h1.innerText='CALCULATOR'


const div1 = createElement('div','','calculator');
div.append(div1)
div1.append(createElement('input' ,'','result',
{
    type:'text',
    disable:''
    
}))
div1.append(createElement('br'))
div1.append(createElement('button','','1',{onclick:"appendToDisplay('1')"}));
div1.append(createElement('button','','2',{onclick:"appendToDisplay('2')"}));
div1.append(createElement('button','','3',{onclick:"appendToDisplay('3')"}));
div1.append(createElement('button','','add',{onclick:"appendToDisplay('+')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','4',{onclick:"appendToDisplay('4')"}));
div1.append(createElement('button','','5',{onclick:"appendToDisplay('5')"}));
div1.append(createElement('button','','6',{onclick:"appendToDisplay('6')"}));
div1.append(createElement('button','','subtract',{onclick:"appendToDisplay('-')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','7',{onclick:"appendToDisplay('7')"}));
div1.append(createElement('button','','8',{onclick:"appendToDisplay('8')"}));
div1.append(createElement('button','','9',{onclick:"appendToDisplay('9')"}));
div1.append(createElement('button','','btnMulti',{onclick:"appendToDisplay('*')"}));
div1.append(createElement('br'))
div1.append(createElement('button','','clear',{onclick:"clearDisplay()"}));
div1.append(createElement('button','','zero',{onclick:"appendToDisplay('0')"}));
div1.append(createElement('button','','btnDot',{onclick:"appendToDisplay('.')"}));
div1.append(createElement('button','','btnDiv',{onclick:"appendToDisplay('/')"}));
div1.append(createElement('br'))
div1.append(createElement('button','result','equal',{onclick:"calculateResult()"}));


const btn1 = document.getElementById('1');
btn1.innerText = '1';
const btn2 = document.getElementById('2');
btn2.innerText = '2';
const btn3 = document.getElementById('3');
btn3.innerText = '3';
const btn4 = document.getElementById('4');
btn4.innerText = '4';
const btn5 = document.getElementById('5');
btn5.innerText = '5';
const btn6 = document.getElementById('6');
btn6.innerText = '6';
const btn7 = document.getElementById('7');
btn7.innerText = '7';
const btn8 = document.getElementById('8');
btn8.innerText = '8';
const btn9 = document.getElementById('9');
btn9.innerText = '9';
const btn0 = document.getElementById('zero');
btn0.innerText = '0';
const btnPlus = document.getElementById('add');
btnPlus.innerText = '+';
const btnMinus = document.getElementById('subtract');
btnMinus.innerText = '-';
const btnMulti = document.getElementById('btnMulti');
btnMulti.innerText = 'X';
const btnDiv = document.getElementById('btnDiv');
btnDiv.innerText = '/';
const btnDot = document.getElementById('btnDot');
btnDot.innerText = '.';
const btnc = document.getElementById('clear');
btnc.innerText = 'C';
const btnRes = document.getElementById('equal');
btnRes.innerText = '=';









function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult(){
    let value = 0;
    value = eval(document.getElementById('result').value); 
    document.getElementById('result').value = value;
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
        document.getElementById('result').value = value;
    
    }

 
 

 








