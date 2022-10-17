let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
a = new Date();
date = a.toLocaleDateString(undefined, options);
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById("time").innerHTML = time + " <br>on " + date;
}, 1000);

console.log("created by Anshul Soni");
console.log("visit my website- anshulsoni.netlify.app");


//don't copy my source code
//thanks for watching my repos
// please follow me on github
