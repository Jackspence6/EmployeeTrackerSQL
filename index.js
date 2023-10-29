// Imports
import mysql from "./src/mysql-wrapper.cjs";
import { displayEmployeeManager } from "./src/utilities.js";
import { prompt } from "./src/prompt.js";
import { Connection } from "mysql2/typings/mysql/lib/Connection.js";

// Open SQL Connection
async function openDbConnection() {
	console.log("Opening DataBase Connection!");

	const connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Jackspence@6",
		database: "employee_db",
	});
	return connection;
}

// Close SQL Connection
async function closeDbConnection() {
	await Connection.end();
}

// Main function for Application
function main() {
	displayEmployeeManager();
	prompt();
}

// Calling the Main application function to start the app
main();
