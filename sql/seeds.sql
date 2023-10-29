/* Seeding department TABLE  */
INSERT INTO
    department (name)
VALUES
    ("HR"),
    ("Engineering"),
    ("Marketing"),
    ("Finance");

/* Seeding role TABLE  */
/* HR roles */
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("HR Manager", 90000.00, 1),
    ("HR Associate", 60000.00, 1);

/* Engineering roles */
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Software Engineer", 120000.00, 2),
    ("DevOps Engineer", 110000.00, 2),
    ("QA Engineer", 100000.00, 2);

/* Marketing roles */
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Marketing Manager", 95000.00, 3),
    ("SEO Specialist", 70000.00, 3);

/* Finance roles */
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Finance Manager", 98000.00, 4),
    ("Accountant", 65000.00, 4);

/* Seeding employee TABLE  */
/* Employees with various roles & managers */
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 1, NULL),
    ("Jane", "Doe", 2, 1),
    ("Emily", "Smith", 3, NULL),
    ("Jack", "Johnson", 4, 3),
    ("Kim", "Williams", 5, NULL),
    ("Alex", "Brown", 6, 5),
    ("Sara", "Davis", 7, NULL),
    ("Tom", "Wilson", 8, 7);