const all = document.querySelector('.container');
const number = document.querySelector('.number');
const supp = document.querySelector('.supp');
console.log(number);
console.log(number.value)



all.addEventListener('click', e=>{
    if(e.target = 'input'){
        let html = e.target.value;
        if(html != undefined){
            number.value += html;
        }
    }
})

supp.addEventListener('click', e=>{
    let x = number.value.split("");
    x.pop();
    number.value = x.join('');
})





