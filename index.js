// Imports
const inquirer = require("inquirer");
const utilities = require("./src/utilities.js");
const promptModule = require("./src/prompt.js");
const dbQueries = require("./src/db.js");

// Global constants & variables
const choiceMenu = promptModule.choiceMenu;
const displayEmployeeManager = utilities.displayEmployeeManager;
const viewAllDepartments = dbQueries.viewAllDepartments;
const viewAllEmployees = dbQueries.viewAllEmployees;
const viewAllRoles = dbQueries.viewAllRoles;
const addDepartment = dbQueries.addDepartment;
const addRole = dbQueries.addRole;
const addEmployee = dbQueries.addEmployee;
const updateEmployeeRole = dbQueries.updateEmployeeRole;

// Main function for Application
function main() {
	displayEmployeeManager();
	inquirer
		.prompt(choiceMenu)
		.then((answers) => {
			switch (answers.homeMenu) {
				case "View all Departments":
					viewAllDepartments();
					break;
				case "View all Roles":
					viewAllRoles();
					break;
				case "View all Employees":
					viewAllEmployees();
					break;
				case "Add a Department":
					addDepartment();
					break;
				case "Add a Role":
					addRole();
					break;
				case "Add an Employee":
					addEmployee();
					break;
				case "Update an Employee Role":
					updateEmployeeRole();
					break;
			}
		})
		.catch((err) => {
			console.error(err);
		});
}

// Calling the Main application function to start the app
main();
