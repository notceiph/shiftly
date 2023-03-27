const calculateRelative = () => {
  const key = document.getElementById("key-input").value.toUpperCase();
  const scale = document.getElementById("scale-input").value.toLowerCase();

  const scales = {
    major: ["C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"],
    minor: ["A", "E", "B", "F#", "C#", "G#", "D#", "F", "C", "G", "D", "A"],
  };

  if (scales.major.includes(key) && scale === "major") {
    document.getElementById("result").textContent = `Relative minor: ${
      scales.minor[scales.major.indexOf(key)]
    }m`;
  } else if (scales.minor.includes(key) && scale === "minor") {
    document.getElementById("result").textContent = `Relative major: ${
      scales.major[scales.minor.indexOf(key)]
    }`;
  } else {
    document.getElementById("result").textContent = "Invalid input";
  }
};

document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateRelative);

function convertFlatToSharp() {
  const flatKey = document
    .getElementById("flatInput")
    .value.trim()
    .toLowerCase();

  const flatKeys = ["cb", "db", "eb", "fb", "gb", "ab", "bb"];
  const sharpKeys = ["b", "c#", "d#", "e", "f#", "g#", "a#"];

  const index = flatKeys.indexOf(flatKey);
  if (index !== -1) {
    const sharpKey = sharpKeys[index];
    document.getElementById(
      "result1"
    ).innerHTML = `The equivalent sharp key is: ${sharpKey}`;
  } else {
    document.getElementById("result1").innerHTML =
      "Invalid input. Please enter a flat key (e.g. Db)";
  }
}

function calculateBPM() {
  var oldBPM = parseFloat(document.getElementById("oldBPM").value);
  var newBPM = parseFloat(document.getElementById("newBPM").value);
  var result = Math.log2(newBPM / oldBPM) * 12;
  document.getElementById("result2").innerHTML =
    result.toFixed(2) + " Semitones";
}
