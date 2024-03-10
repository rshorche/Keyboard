const btn = document.querySelectorAll("button");
const p = document.querySelector("p");

window.addEventListener("keydown", (ev) => {
  console.log(ev);
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML == ev.key.toLowerCase() && i != 10 && i != 11) {
      btn[i].classList.add("down");
      if (ev.getModifierState("CapsLock")) {
        p.innerHTML += btn[i].innerHTML.toUpperCase();
      } else {
        p.innerHTML += btn[i].innerHTML.toLowerCase();
      }
    }
  }
  if (ev.code == "Backspace") {
    p.innerHTML = p.innerHTML.slice(0, -1);
    btn[10].classList.add("down");
  }
  if (ev.code == "Space") {
    p.innerHTML = p.innerHTML += " ";
    btn[28].classList.add("down");
  }
});

window.addEventListener("keyup", (ev) => {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML == ev.key.toLowerCase()) {
      btn[i].classList.remove("down");
    }
    if (btn[i].innerHTML == ev.key.toUpperCase()) {
      btn[i].classList.remove("down");
    }
    if (ev.code == "Backspace") {
      btn[10].classList.remove("down");
    }
    if (ev.code == "Space") {
      btn[28].classList.remove("down");
    }
  }
});
