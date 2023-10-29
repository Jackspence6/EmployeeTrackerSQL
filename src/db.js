// Imports
const mysql = require("mysql2");
const inquirer = require("inquirer");
const promptModule = require("./prompt.js");

// Global constants & variables
const addDepartmentQuestion = promptModule.addDepartmentQuestion;

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
		} else {
			console.table(results);
		}
		// Closing SQL connection
		db.end();
	});
}

// Function to display job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
	db.query("SELECT * FROM role", (err, results) => {
		if (err) {
			console.error("Error fetching data:", err);
			return;
		} else {
			console.table(results);
		}
		// Closing SQL connection
		db.end();
	});
}

// Function to display all employee data
function viewAllEmployees() {
	db.query("SELECT * FROM employee", (err, results) => {
		if (err) {
			console.error("Error fetching data:", err);
			return;
		} else {
			console.table(results);
		}
		// Closing SQL connection
		db.end();
	});
}

// Function to add a new department into department table
function addDepartment() {
	// Prompting user for new dept name in CLI
	inquirer
		.prompt(addDepartmentQuestion)
		.then((result) => {
			// Assigning user input to variable
			var newDept = result.departmentName;

			// Inserting new department into database
			db.query(
				"INSERT INTO department (name) VALUES (?)",
				[newDept],
				(err, results) => {
					if (err) {
						console.error("Error fetching data:", err);
						return;
					} else {
						console.log("Successfully added new department!");
						console.table(results);
					}
					// Closing SQL connection
					db.end();
				}
			);
		})
		.catch((err) => {
			console.error(err);
		});
}

// Function to fetch departments from the database
function fetchDepartments() {
	return new Promise((resolve, reject) => {
		db.query("SELECT id, name FROM department", (err, results) => {
			if (err) reject(err);
			else resolve(results);
		});
	});
}

// Function to add a new role into role table
async function addRole() {
	try {
		// Fetching departments
		const departments = await fetchDepartments();

		// Preparing choices for Inquirer
		const departmentChoices = departments.map((dept) => ({
			name: dept.name,
			value: dept.id,
		}));

		// Add a new Role questions
		const addRoleQuestions = [
			{
				name: "roleName",
				type: "input",
				message: "Please enter the new role's name:",
			},
			{
				name: "roleSalary",
				type: "input",
				message: "Please enter the new role's salary:",
			},
			{
				name: "departmentId",
				type: "list",
				message: "Please select the new role's department:",
				choices: departmentChoices,
			},
		];

		// Prompting the user
		const answers = await inquirer.prompt(addRoleQuestions);

		// Inserting the new role
		const { roleName, roleSalary, departmentId } = answers;

		db.query(
			"INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
			[roleName, roleSalary, departmentId],
			(err, results) => {
				if (err) {
					console.error("Error:", err);
					return;
				}
				console.log("Successfully added new role!");
				db.end();
			}
		);
	} catch (err) {
		console.error("Error:", err);
	}
}

// Exporting functions to be used in index.js
module.exports = {
	viewAllDepartments: viewAllDepartments,
	viewAllEmployees: viewAllEmployees,
	viewAllRoles: viewAllRoles,
	addDepartment: addDepartment,
	addRole: addRole,
};
