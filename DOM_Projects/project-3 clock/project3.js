const time = document.getElementById('time2');

// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
//    console.log(date.toLocaleTimeString());
   time.innerHTML = date.toLocaleTimeString();
},1000)