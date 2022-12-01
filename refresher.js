

// const obj ={
//     Name : 'Sandip Bajagain',
//     Sem: 1,
//     Faculty : 'CSIT'
// };

const { Console } = require("console");


// const arr = ['Sandip', 1, 'CSIT'];
// const copiedArr = arr.slice();
// console.log(copiedArr)
// // //here kxa is an array which is returned from 
// // the function and three . sign is a rest operator 
// // which is used to pass infinite no of agruments in the function
// const toArray = (...kxa)=>{
//     return kxa;
// }

// console.log(toArray(1,11,'hello'));





// const obj ={
//     Name : 'Sandip Bajagain',
//     Sem: 1,
//     Faculty : 'CSIT'
// };


// const printName =({Name, 
//     Sem})=>{
//      console.log('Name is :' , Name, '\n and currently in sem: ',Sem);
// }
// printName(obj);




//Time out
let data = hello =>{
    setTimeout(() => {
       hello ('Done!')
        console.log("Hello \nHi!")
    }, 1500);
}



setTimeout(()=>{

    console.log("Time is up");

    data((fetecheddata)=>{

        console.log(fetecheddata)
    });
}, 3);

console.log("This will print first")