const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const total_marks = parseInt(document.querySelector('#total-marks').value)
    const obt_marks = parseInt(document.querySelector('#obt-marks').value)
    const result = document.querySelector('#results')

    if (total_marks < 0) {
        console.log(`${total_marks} is invalid`);
    }
    else if (obt_marks < 0) {
        console.log(`${obt_marks} is invalid`);
    }
    else {
        const percent = (((obt_marks/total_marks)*100).toFixed(2));
        result.innerHTML = `PERCENT:${percent}%`
    }
})