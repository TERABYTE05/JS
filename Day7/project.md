# project related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?filw=index.html)


# solution code 

## project 1

``` javascript 
console.log("Hello World");
const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            
        }
    })
});
```


## project 2

```javascript
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
```