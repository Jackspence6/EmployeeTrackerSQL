// Importing inquirer package for CLI prompting
import inquirer from "inquirer";

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

// Function to prompt users in CLI
function userPrompt() {
	inquirer
		.prompt(choiceMenu)
		.then((answers) => {
			console.log(answers);
		})
		.catch((err) => console.error(err));
}

// Exporting the main function to prompt users in CLI
export function prompt() {
	userPrompt();
}
