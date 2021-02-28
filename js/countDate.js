var pastDate = new Date('May 6, 1995 00:00:00').getTime();
function pastTime() {
 var now = new Date().getTime();
 gap = pastDate - now
 var sec = 1000;
 var min = sec*60;
 var hour = min*60;
 var day = hour*24;

 var d = Math.floor(gap/(day));
 var h = Math.floor(gap % (day)) /(hour);
 var m = Math.floor(gap % (hour)) /(min);
 var s = Math.floor(gap % (min)) /(sec);

 document.getElementById('day').innerHTML = d*-1;
 document.getElementById('hour').innerHTML = Math.trunc(h*-1);
 document.getElementById('min').innerHTML = Math.trunc(m*-1);
 document.getElementById('sec').innerHTML = Math.trunc(s*-1)
}

setInterval(()=>{
 pastTime();
},1000)