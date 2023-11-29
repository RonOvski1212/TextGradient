function randomColor() {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeGradient() {
  const text = document.querySelector(".text");
  const shadow = document.querySelector(".shadow");
  const gradient = `linear-gradient(160deg, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()},${randomColor()})`;
  const textShadow = `8px 2px 5px ${randomColor()}`;
  text.style.backgroundImage = gradient;
  shadow.style.textShadow = textShadow;
}

let interval;
const inputSpeed = document.querySelector("#volume");
function handleSpeedChange() {
  const speed = parseFloat(inputSpeed.value);
  clearInterval(interval);
  interval = setInterval(changeGradient, speed * 50);
}

inputSpeed.addEventListener("input", handleSpeedChange);

handleSpeedChange();
