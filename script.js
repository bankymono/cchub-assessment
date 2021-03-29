const userInput = document.querySelector('.inputs');
const buttons = document.querySelectorAll('.button')
const result = document.querySelector('.result')

let ans;

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML === '=') {
            userInput.innerHTML = userInput.innerHTML;
            calculate();
        }        
        else{
            
            if(result.innerHTML !== ''){
                result.innerHTML = ''
                userInput.innerHTML = ''
            }
            userInput.innerHTML = userInput.innerHTML + button.innerHTML;
        }

    })

})

const calculate = () => {
    // alert(userInput.innerHTML)
    let input = userInput.innerHTML;
    inputAsArray = input.split('')
    
    // remove the equals operator
    // inputAsArray.splice(-1,1)
    let operator = inputAsArray.find(element => element === '+' || element === '-' || element === '*' || element === '/')
    
    // alert(operator)
    input = inputAsArray.join('')
    let splitInput = input.split(/[\+\-\/\*]/)
    console.log(splitInput)
    // alert(splitInput)


    if(splitInput.length > 2) {
        alert('invalid input')
        userInput.innerHTML = '';
    }else{
        let val1 = splitInput[0]
        let val2 = splitInput[1]

        // alert(val1 + operator + val2)

        switch(operator){
            case '+':
                ans = Number(val1) + Number(val2);               
                break;
            case '-':
                ans = Number(val1) - Number(val2);
                break;
            case '*':
                ans = Number(val1) * Number(val2);
                console.log(ans)
                break;
            case '/':
                ans = Number(val1) / Number(val2);
                break;
            default:
                alert('error')
        }

        result.innerHTML = ans;
    }
}