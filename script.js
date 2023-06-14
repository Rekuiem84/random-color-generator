const background = document.querySelector(".background");
const generateButton = document.querySelector(".background .button");

function generateColor() {
	const color = Math.floor(Math.random() * 16777215).toString(16);
	return color;
}

// to do : make the color rgb by default
// then change the hextoRgb function to rgbtoHex

generateButton.addEventListener("click", () => {
	color = generateColor();
	console.log(color);
	background.style.backgroundColor = "#" + color;
	updateCardColorCodes(color);
});

// copy color code on click and display copy message
const colorCodes = document.querySelectorAll(".color-code");
const copyMessage = document.querySelector(".copy-message");
const copyMessageColorType = document.querySelector(".copy-message span");

colorCodes.forEach((colorCode) => {
	colorCode.addEventListener("click", () => {
		navigator.clipboard.writeText(colorCode.innerText);

		const colorType = colorCode.getAttribute("data-code");
		copyMessageColorType.innerText = colorType;
		copyMessage.classList.add("visible");
		setTimeout(() => {
			copyMessage.classList.remove("visible");
		}, 3000);
	});
});

// convert hex to rgb
function hexToRgb(hex) {
	const color = hex.split("");
	const r = parseInt(color[0] + color[1], 16);
	const g = parseInt(color[2] + color[3], 16);
	const b = parseInt(color[4] + color[5], 16);
	return `${r}, ${g}, ${b}`;
}

// update color codes
const HEXCodeElement = document.querySelector("#code-hex");
const RGBCodeElement = document.querySelector("#code-rgb");

function updateCardColorCodes(color) {
	HEXCodeElement.innerText = color;
	RGBCodeElement.innerText = hexToRgb(color);
}
