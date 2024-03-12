function updateCalculatorSize() {
    var screenHeight = window.innerHeight;

    elt.style.height = screenHeight + "px";
  }

function interpolateColor(color1, color2, factor) {
  if (factor > 1) factor = 1;
  if (factor < 0) factor = 0;

  var result = '#';
  for (var i = 1; i <= 6; i += 2) {
    var colorPart1 = parseInt(color1.substr(i, 2), 16);
    var colorPart2 = parseInt(color2.substr(i, 2), 16);
    var interpolatedColorPart = Math.round(colorPart1 + factor * (colorPart2 - colorPart1));
    var interpolatedColorPartHex = interpolatedColorPart.toString(16);
    if (interpolatedColorPartHex.length === 1) {
      interpolatedColorPartHex = '0' + interpolatedColorPartHex;
    }
    result += interpolatedColorPartHex;
  }
  return result;
}

window.addEventListener('resize', updateCalculatorSize);