// Imports

// Initial Questions
const choiceMenu = [
	{
		name: "homeMenu",
		type: "list",
		message: "What would you like to do?",
		choices: [
			"View all Departments",
			"View all Roles",
			"View all Employees",
			"Add a Department",
			"Add a Role",
			"Add an Employee",
			"Update an Employee Role",
		],
	},
];

// Add a new Department question
const addDepartmentQuestion = [
	{
		name: "departmentName",
		type: "input",
		message: "Please enter the new department's name:",
	},
];

// Add a new Employee questions
const addEmployeeQuestions = [
	{
		name: "employeeFirstName",
		type: "input",
		message: "Please enter the new employee's first name:",
	},
	{
		name: "employeeLastName",
		type: "input",
		message: "Please enter the new employee's last name:",
	},
	{
		name: "employeeRole",
		type: "input",
		message: "Please enter the new employee's role:",
	},
	{
		name: "employeeManagerId",
		type: "input",
		message: "Please enter the manager's ID for the new employee:",
	},
];

// Exports
module.exports = {
	choiceMenu: choiceMenu,
	addDepartmentQuestion: addDepartmentQuestion,
	addEmployeeQuestions: addEmployeeQuestions,
};
