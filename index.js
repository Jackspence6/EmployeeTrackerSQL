// Importing displayEmployeeManager function from src/utilities.js
import { displayEmployeeManager } from "./src/utilities.js";
// Importing prompt function from src/prompt.js
import { prompt } from "./src/prompt.js";

// Main function for Application
function main() {
	displayEmployeeManager();
	prompt();
}

// Calling the Main application function to start the app
main();
