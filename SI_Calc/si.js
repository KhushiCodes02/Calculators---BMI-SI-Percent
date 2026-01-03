const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() ;

    const prinipal_amt = parseFloat(document.querySelector('#principal').value)
    const rate_int = parseInt(document.querySelector('#rate').value)
    const time = parseInt(document.querySelector('#time').value)
    const results = document.querySelector('#results')

    if (prinipal_amt === "" || prinipal_amt < 0 || isNaN(prinipal_amt)) {
        results.innerHTML = `${prinipal_amt} is not a valid amount`
    }
    else if (rate_int === "" || rate_int < 0 || isNaN(rate_int)) {
        results.innerHTML = `${rate_int} is not a valid rate`
    }
    else if (time === "" || time < 0 || isNaN(time)) {
        results.innerHTML = `${time} is not a valid rate`
    }
    else{
        const loan = (prinipal_amt*rate_int*time)/100;
        results.innerHTML = `LOAN: ${loan}`
    }
})