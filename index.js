// Imports
// const mysql = require("mysql2");
const inquirer = require("inquirer");
const utilities = require("./src/utilities.js");
const promptModule = require("./src/prompt.js");
// const Connection = require("mysql2/typings/mysql/lib/Connection.js");

// Global constants & variables
const choiceMenu = promptModule.choiceMenu;
const displayEmployeeManager = utilities.displayEmployeeManager;

// // Open SQL Connection
// function openDbConnection() {
// 	console.log("Opening DataBase Connection...");

// 	const connection = mysql.createConnection({
// 		host: "localhost",
// 		user: "root",
// 		password: "Jackspence@6",
// 		database: "employee_db",
// 	});
// 	return connection;
// 	console.log("Connected to the employee_db DataBase!");
// }

// // Close SQL Connection
// function closeDbConnection() {
// 	Connection.end();
// }

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
