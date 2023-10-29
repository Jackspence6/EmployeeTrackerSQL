/* Dropping employee database if one already exists  */
DROP DATABASE IF EXISTS employee_db;

/* Creating an employee Database */
CREATE DATABASE employee_db;

/* Using the employee database */
USE employee_db;

/* Creating a department table in the employee database  */
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

/* Creating a role table in the employee database  */
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE
    SET
        NULL
);

/* Creating an employee table in the employee database  */
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE
    SET
        NULL
);