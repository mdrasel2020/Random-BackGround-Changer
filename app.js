let body = document.querySelector('body');
let btnb = document.querySelector('button');
function code(){
    let remdomNumber = Math.round(Math.random() * 100000 * 6 + 100000);
    body.style.backgroundColor = `#${remdomNumber}`;
    let btnbg = Math.floor(remdomNumber *9 /6);
    btnb.style.backgroundColor=`#${btnbg}`
}
setInterval(() => {
  code()
}, 4000);
