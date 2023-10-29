// Imports
const mysql = require("mysql2");

// Open SQL Connection
const db = mysql.createConnection(
	{
		host: "127.0.0.1",
		user: "root",
		password: "Jackspence@6",
		database: "employee_db",
	},
	(err) => {
		if (err) {
			console.error("Error connecting to the database:", err);
			return;
		}
		console.log("Connected to the employee_db DataBase!");
	}
);

// Function to display all department names & id's
function viewAllDepartments() {
	db.query("SELECT * FROM department", (err, results) => {
		if (err) {
			console.error("Error fetching data:", err);
			return;
		}
		console.table(results);
	});
}

// Function to display job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
	db.query("SELECT * FROM role", (err, results) => {
		if (err) {
			console.error("Error fetching data:", err);
			return;
		}
		console.table(results);
	});
}
