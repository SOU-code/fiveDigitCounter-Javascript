var flag = 1;
function myfunction() {
  if (flag == 0) {
    window.alert(
      "already Process! please resart if start another before complete it"
    );
    return;
  }
  flag = 0;
  const inputVar = document.querySelector(".input-number>input");
  const next = document.querySelectorAll(".next");
  const current = document.querySelectorAll(".current");
  const total = inputVar.value;
  const val = new Array();
  if (total > 0 && total < 100000) {
    for (var i = 0; i < 5; i++) {
      next[i].innerHTML = 0;
      current[i].innerHTML = 0;
    }
    var count = 0;
    var interval = setInterval(animation, 1000, total, next, current, val);
  }
  function animation(total, next, current, val) {
    if (total == count) {
      clearInterval(interval);
      flag = 1;
      return;
    }
    count++;
    let temp = count;
    console.log(count);
    console.log(temp);
    let i = 0;
    while (temp != 0) {
      val[i] = temp % 10;
      temp = parseInt(temp / 10);
      if (val[i] != current[i].innerHTML) {
        next[i].innerHTML = val[i];
        next[i].classList.add("animation");
        fun1(next[i], current[i], val[i]);
      }
      i++;
    }
    function fun1(a, b, c) {
      setTimeout(function () {
        a.classList.remove("animation");
        b.innerHTML = c;
      },500);
    }
  }
}
