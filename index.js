const currencyElementBase = document.getElementById('currency-base');
const amountElementBase = document.getElementById('amount-base');
const currencyElementEx = document.getElementById('currency-ex');
const amountElementEx = document.getElementById('amount-ex');
// const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');
const save = document.getElementById('save');
const histroyCard = document.getElementById('histroyCard');
const history = document.getElementById('history');


function calculate() {

    const baseCurrency = currencyElementBase.value;
    const exCurrency = currencyElementEx.value;

    fetch(`https://v6.exchangerate-api.com/v6/3adb906aa2449c15d4da4401/latest/${baseCurrency}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            const rate = data.conversion_rates[`${exCurrency}`];
            amountElementEx.value = (amountElementBase.value * rate).toFixed(2);
        })
};

currencyElementBase.addEventListener('change', calculate);
amountElementBase.addEventListener('input', calculate);

currencyElementEx.addEventListener('change', calculate);
amountElementEx.addEventListener('input', calculate);

// swap.addEventListener('click', () => {
//     const baseNow = currencyElementBase.value;
//     const exNow = currencyElementEx.value;
//     console.log(baseNow);
//     console.log(exNow);
//     currencyElementBase.value = exNow;
//     currencyElementEx.value = baseNow;
//     console.log('Here is good');
//     calculate();
// });

function showHistory() {
    historyCard.style.display = "block";
    history.innerHTML = `Excanged <strong>${amountElementBase.value} ${currencyElementBase.value} </strong> to <strong>${amountElementEx.value} ${currencyElementEx.value}</strong>`;
};

// save.addEventListener('click', () => {
//     showHistory();
    
// })

calculate();