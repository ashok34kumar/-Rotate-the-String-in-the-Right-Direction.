let string = document.querySelector('#string')
let str = 'Ashok_Kumar_Ram.'

function animateString(str) {
    setInterval(() =>{
        let newstr = str.substring(str.length-1) + str.substring(0,str.length-1);
        string.innerHTML = newstr
        str = newstr
    },1000)
}
animateString(str);









// let startstr = str.substring(str.length-1);
// console.log(startstr);
// let endstr = str.substring(0,str.length-1)
// console.log(endstr);


