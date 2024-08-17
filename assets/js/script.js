const userWord = document.getElementById('text-input');
const checkWord = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkWordPalidrome = (val) => {
    const originalVal = val;
    if (originalVal===""){
        alert("Please input a value")
    } else {
    result.replaceChildren();
    const originalValLowCase = originalVal.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const reverseVal = originalValLowCase.split('').reverse().join('');
    let resultText = `${originalVal} ${originalValLowCase === reverseVal ? 'is' : 'is not'} a palindrome.`;
    const resultTextElement = document.createElement('p');
    resultTextElement.innerHTML = resultText;
    result.appendChild(resultTextElement);
    result.classList.remove("hidden");
    }
}

checkWord.addEventListener("click",  () =>{
    checkWordPalidrome(userWord.value)
});