const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || isNaN(height) || weight === '' || isNaN(weight)) {
        result.innerHTML = 'Please enter valid height and weight!'
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`
        } else if(bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal Weight : <span>${bmi}</span>`
        } else {
            result.innerHTML = `Over Weight : <span>${bmi}</span>`
        }
    }
})