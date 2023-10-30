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

// Exports
module.exports = {
	choiceMenu: choiceMenu,
	addDepartmentQuestion: addDepartmentQuestion,
};
