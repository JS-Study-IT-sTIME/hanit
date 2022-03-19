const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const resultButton = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
let resultText = document.querySelector("#resultText");

let pause = 0; // 연산자 눌렀을 경우 두번째 숫자 입력

let num1Text = ""; // 첫 번째 숫자 string 값
let num2Text = ""; // 두 번째 숫자 string 값
let operator = "";

let num1 = 0; // 첫 번째 숫자 int
let num2 = 0; // 두 번째 숫자 int
let resultNum = 0; // 연산 결과

// console.log(numbers);
// console.log(operators);

resultButton.addEventListener("click", result); // 연산 결과 출력
clearButton.addEventListener("click", clearAll); // 모든 값 초기화

// 연산자 결정
for(const op of operators){
    op.addEventListener("click", function() {
        if(pause == 0){
            operator = op.textContent;
            pause = 1;
            resultText.textContent = op.textContent;
        }
        
    });
}

// 숫자 버튼 누를 때마다 숫자 텍스트 갱신
for(const num of numbers){
    num.addEventListener("click", function() {
        console.log(num.textContent);
        if(pause == 0){
            num1Text = num1Text + num.textContent;
            // console.log(num1Text);
            resultText.textContent = num1Text;
        } else {
            num2Text = num2Text + num.textContent;
            // console.log(num2Text);
            resultText.textContent = num2Text;
        }
    });
}

// 숫자 텍스트를 int로 변환하고 변환 값으로 연산 수행
function result(event){
    event.preventDefault();
    if(pause == 1){
        num1 = parseInt(num1Text);
        num2 = parseInt(num2Text);

        switch(operator){
            case "+":
                resultNum = num1 + num2;
                break;
            case "-":
                resultNum = num1 - num2;
                break;
            case "/":
                resultNum = num1 /  num2;
                break;
            case "x":
                resultNum = num1 * num2;
                break;
        }
    }
    console.log(resultNum);
    resultText.textContent = resultNum;
    pause = 0;
}

// 모든 값 초기회
function clearAll(event){
    pause = 0;

    num1Text = "";
    num2Text = "";
    operator = "";
    
    num1 = 0;
    num2 = 0;
    resultNum = 0;

    resultText.textContent = "계산할 숫자를 입력하세요.";
}