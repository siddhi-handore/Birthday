const ballonContainer = document.getElementById("ballon-container");
    const wish = document.querySelector(".wish");
    const cflame = document.querySelector(".candle-flame");
    const candle = document.querySelector(".candle");
    const upContainer = document.querySelector(".up-container");
    const Container = document.querySelector(".container");
    wish.style.display = "none";
    cflame.style.display = "none";
    candle.style.display = "none";
    Container.style.display = "none";
    upContainer.style.display = "none";
    setTimeout(() => {
      wish.style.display = "block";
      cflame.style.display = "block";
      candle.style.display = "block";
      Container.style.display = "block";
      upContainer.style.display = "block";
      createBalloons(30);
      setTimeout(() => {
        ballonContainer.style.transition = "transform 10s ease-in-out";
        ballonContainer.style.transform = "translateY(-300vh)";
      }, 100);
    }, 5000);

    function random(num) {
      return Math.floor(Math.random() * num);
    }

    function getRandomStyles() {
      var r = random(255);
      var g = random(255);
      var b = random(255);
      var mt = random(200);
      var ml = random(50);
      var dur = random(5) + 5;
      return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite;
      `;
    }

    function createBalloons(num) {
      for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        ballonContainer.append(balloon);
      }
    }

    // function removeBalloons() {
    //   ballonContainer.style.opacity = 0;
    //   setTimeout(() => {
    //     ballonContainer.remove();
    //   }, 1000);
    // }

    // window.addEventListener("click", () => {
    //   removeBalloons();
    // });
