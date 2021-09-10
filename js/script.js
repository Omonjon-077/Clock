const h = document.querySelector('.h'),
      m = document.querySelector('.m'),
      s = document.querySelector('.s'),
      hourNumber = document.querySelector('.hours'),
      minNumber = document.querySelector('.minutes');



      function clock() {
         let time = new Date(),
         hours = time.getHours() * 30,
         minutes = time.getMinutes() * 6,
         seconds = time.getSeconds() * 6;
         h.style.transform = `rotate(${hours}deg)`
         m.style.transform = `rotate(${minutes}deg)`
         s.style.transform = `rotate(${seconds}deg)`
         minNumber.innerHTML = time.getMinutes()<10 ?'0'+time.getMinutes():time.getMinutes()
         hourNumber.innerHTML = time.getHours()<10 ?'0'+time.getHours():time.getHours()
         
 setTimeout(() => {
           clock()
         }, 1000);
        
      }
clock()

const links = document.querySelectorAll('.tabsItem'),
  tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    const el= links[i];
    el.addEventListener('click', function (e) {
      e.preventDefault()
      for (let k = 0; k < links.length; k++) {
        links[k].classList.remove('active')
        tabs[k].classList.remove('active')
      }
      el.classList.add('active')
      tabs[i].classList.add('active')
    })
}


//==========================================================

const   clockBtn = document.querySelector('.stopwatch__btn'),
 clockSecond = document.querySelector('.stopwatch__seconds'), 
 clockMinutes = document.querySelector('.stopwatch__minutes'),
 clockHours = document.querySelector('.stopwatch__hours'), 
 seconfInfo = document.querySelector('.tabsLink__span'); 
 
clockBtn.addEventListener('click', function () { 
if (this.innerHTML == 'start') { 
 this.innerHTML = 'stop';
 seconfInfo.classList.add('active');
 let i = 0;
 setTimeout(() => stopWatch(this, i), 1000)

} else if (this.innerHTML == 'stop') {
 seconfInfo.classList.remove('active');
 seconfInfo.classList.add('active_clear');
 this.innerHTML = 'clear';
} else {
 seconfInfo.classList.remove('active_clear');
 clockSecond.innerHTML = 0;
 clockMinutes.innerHTML = 0;
 clockHours.innerHTML = 0;
 this.innerHTML = 'start';
}
})
function stopWatch(el, i) { 
if (el.innerHTML == 'stop') {
 if (i == 60) { 
     i = 0;
     clockSecond.innerHTML = i 
     if (clockMinutes.innerHTML == 59) {
         clockMinutes.innerHTML = 0;
         clockHours.innerHTML++;
     } else {
         clockMinutes.innerHTML++

     }
 } else {
     i++ 
     clockSecond.innerHTML = i;
 }
 setTimeout(() => stopWatch(el, i), 1000);
} 
}