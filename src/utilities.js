// Function to displayScaledText
function displayScaledText(text, scale) {
	let scaledText = "";
	for (let char of text) {
		scaledText += char + " ".repeat(scale - 1);
	}
	return scaledText;
}

// function to displayEmployeeManager Text with Border
function displayEmployeeManager() {
	const scale = 2;
	const length = 60;

	const border = "+" + "-".repeat(length) + "+";
	const emptyLine = "|" + " ".repeat(length) + "|";

	// Scaling the text
	const text = displayScaledText("Employee Manager", scale);

	// Calculating the padding for the scaled text
	const totalPadding = length - text.length;
	const paddingLeft = Math.floor(totalPadding / 2);
	const paddingRight = totalPadding - paddingLeft;

	const textLine =
		"|" + " ".repeat(paddingLeft) + text + " ".repeat(paddingRight) + "|";

	console.log(border);
	for (let i = 0; i < scale; i++) {
		console.log(emptyLine);
	}
	console.log(textLine);
	for (let i = 0; i < scale; i++) {
		console.log(emptyLine);
	}
	console.log(border);
}

// Exporting functions to be used in index.js
module.exports = {
	displayScaledText: displayScaledText,
	displayEmployeeManager: displayEmployeeManager,
};
