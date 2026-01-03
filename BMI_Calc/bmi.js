const form = document.querySelector('form')

form.addEventListener('submit', function(event_occur){
    event_occur.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height === NaN || height < 0) {
        results.innerHTML = `${height} is not a valid height`
    } 
    else if(weight === '' || weight === NaN || weight < 0){
        results.innerHTML = `${weight} is not a valid weight`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.50){
            results.innerHTML = `BMI: ${bmi} [YOU ARE UNDERWEIGHT]`
        }
        else if (bmi > 18.50 && bmi < 29.90) {
            results.innerHTML = `BMI: ${bmi} [YOU ARE FIT]`
        } 
        else {
            results.innerHTML = `BMI: ${bmi} [YOU ARE OVERWEIGHT]`
        }
    }
});