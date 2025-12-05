// document.body.style.backgroundColor = "violet";
// document.body.style.fontFamily = "Arial, sans-serif";
// document.body.style.fontSize = "20px";
// document.title="DOM";

const b=document.body;
b.style.backgroundColor = "orange";
// b.firstElementChild.style.backgroundColor="purple";
// // const conts = document.getElementById('b1');
// conts.style.backgroundColor = "black";
// conts.style.color = "white";
// conts.style.fontaSize = "40px";

// const cont = document.getElementById('b3');
// cont.style.backgroundColor = "black";
// cont.style.color = "white";
// cont.style.fontaSize = "40px";

// const conta = document.getElementById('b5');
// conta.style.backgroundColor = "black";
// conta.style.color = "white";
// conta.style.fontaSize = "40px";

// const fc=document.getElementById('flexContainer');
// fc.style.display = "flex";

// const cont=document.getElementById('container');
// cont.innerHTML='<h1 class="textChange">This is inner HTML</h1>';
// document.getElementById('textChange').innerText='Hello World';

// const box = document.getElementsByClassName('box'); // corrected method name
//         console.log(box);

//         for(let i = 0; i < box.length; i++){
//             box[i].style.margin = "10px";
//             box[i].style.width = "100px";
//             box[i].style.height = "50px";
//             box[i].style.border = "5px solid black";
//             box[i].style.backgroundColor = "red";
//             box[i].style.color = "white";
//             box[i].style.fontSize = "20px";
//         }

// const boxo = document.getElementsByClassName('container'); // corrected method name
//         console.log(boxo);

//         for(let i = 0; i < box.length; i++){
//             boxo[i].style.margin = "10px";
//             boxo[i].style.width = "100px";
//             boxo[i].style.height = "50px";
//             boxo[i].style.border = "5px solid black";
//             boxo[i].style.backgroundColor = "orange";
//             boxo[i].style.color = "black";
//             boxo[i].style.fontSize = "20px";
//         }



// box[2].style.height="50px";
// box[2].style.width="50px";
// box[2].style.border="5px solid black";

//querySelector and querySelectorAll
//querySelector-return the first element that it finds.
//querySelectorAll-return us a list of all the element 
// that can be accessed using the index numbers.

// const cont=document.querySelector("div");
// const cont2=document.querySelectorAll("div");
// cont[4].style.fontSize="30px";
// [...cont2].forEach(x=>console.log(x));//[1,2,3,4,5]

const box1 = document.getElementById('b1');
box1.classList.add('red');
//box1.classList.remove('box');
box1.classList.replace('red','blue');
box1.classList.toggle('green');
if(box1.classList.contains('box')){
    console.log("Box class has been applied");
}