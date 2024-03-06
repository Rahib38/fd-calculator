function calculateMaturityAmount(){

    const principle = parseFloat(document.getElementById('principle').value);
    console.log(principle);

    const interestRate = parseFloat(document.getElementById('InterestRate').value);
    console.log(interestRate);

    const tenure = parseFloat(document.getElementById('tenure').value);
    console.log(tenure);

    const maturityAmount = principle + (principle*interestRate*tenure);

    console.log(maturityAmount);

    const result = document.getElementById('result');
    const resultText =result.innerText = `maturity Amount : ${maturityAmount.toFixed(2)}`;

}
// document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount)