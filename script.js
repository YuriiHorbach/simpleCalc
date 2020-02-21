let items = document.querySelectorAll('.item');
let input = document.querySelector('input');


function insert(){
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', function(){
            if(this.className == 'item clean'){
                input.value = ''; 
            } else{
                input.value += items[i].getAttribute('data-value');
        }
        });
    }
}

function clean(){
    input.value = ' '; 
}


function back(){
    let inputVal = input.value;
    let inputValOut = inputVal.substring(0, inputVal.length - 1);
    input.value = inputValOut;
}

function equal(){
    let exp = input.value;
    if(exp){
        input.value = eval(exp);
    }else{
        input.value = 0;
    }
}

insert();
clean();

let backBtn = document.querySelector('.back');

backBtn.addEventListener('click', back);

let equalBtn = document.querySelector('.equal');

equalBtn.addEventListener('click', equal);


