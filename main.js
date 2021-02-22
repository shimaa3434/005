const empty= '';
const uppe= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowe= 'abcdefghijklmnopqrstuvwxyz';
const num= '0123456789';
const symbol= '!@#$%^&*()+=-_';


const length= document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase= document.getElementById('lowercase');
const numbers= document.getElementById('numbers');
const symbols= document.getElementById('symbol');

const btn= document.getElementById('btn');
const password= document.getElementById('password');
const copy= document.getElementById('copy');


getpassword = ()=>{
    let initial = empty;
    (uppercase.checked)? initial += uppe: '';
    (lowercase.checked)? initial += lowe: '';
    (numbers.checked)? initial += num: '';
    (symbols.checked)? initial += symbol: '';

    password.value = generator(length.value, initial);
}

generator = (l,i) =>{
    let pass= '';
    for(let x= 0; x < l; x++){
        pass += i.charAt(Math.floor(Math.random() * i.length));
    }
    return pass;
} 


btn.addEventListener('click', getpassword);
copy.addEventListener('click', () =>{
    if(password.value != ""){
        password.select();
        document.execCommand('copy');
        alert('password has been copied');
    }
})




