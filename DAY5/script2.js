const myForm= document.getElementById('myForm');
const name= document.getElementById('#inp1');
const email= document.getElementById('#inp2');
const age= document.getElementById('#inp3');
const submitBtn = document.getElementById('#inp4');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(`uname:${uname.value}`);
    console.log(`Email:${email.value}`);
    console.log(`Age:${age.value}`);
    myForm.reset();
})