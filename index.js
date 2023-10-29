// Imports
const inquirer = require("inquirer");
const utilities = require("./src/utilities.js");
const promptModule = require("./src/prompt.js");

// Global constants & variables
const choiceMenu = promptModule.choiceMenu;
const displayEmployeeManager = utilities.displayEmployeeManager;

// Main function for Application
function main() {
	displayEmployeeManager();
	inquirer
		.prompt(choiceMenu)
		.then((answers) => {
			switch (answers) {
				case "View all Departments":
					break;
				case "View all Roles":
					break;
				case "View all Employees":
					break;
				case "Add a Department":
					break;
				case "Add a Role":
					break;
				case "Add an Employee":
					break;
				case "Update an Employee Role":
					break;
			}
		})
		.catch((err) => {
			console.error(err);
		});
}

// Calling the Main application function to start the app
main();
