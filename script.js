let input = document.querySelector('input');
let items = document.querySelectorAll('.item');

function addNumber(){
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', function(){
            input.value += this.innerText;
            console.log(input.value);
        });
    }
}

let backBtn = document.querySelector('.back');

function back(){
    let inputVal = input.value;
    let inputValOut = inputVal.substring(0, inputVal.length - 1);
    input.value = inputValOut;
}


addNumber();
backBtn.addEventListener('click', back);