//^^Declaration des variable
let btn_clear = document.querySelector("#btn_clear");
let btn_remove = document.querySelector("#btn_remove");
let btn_nbr = document.querySelector("#btn_nbr");
let btn_calcul = document.querySelector("#btn_calcul");

//^^Function Append
function appendInput(value) {
    document.getElementById('result').value += value;
}
btn_nbr.addEventListener("click",appendInput.bind);
//^^Function Calculate
function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
btn_calcul.addEventListener("click",calculate);
//^^Function clear
function clearResult() {
    document.getElementById('result').value = '';
}
btn_clear.addEventListener("click",clearResult);
//^^Function delete
function deleteDigit() {
    const currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}
btn_remove.addEventListener("click",deleteDigit);
