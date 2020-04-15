USE employeeTracker_db;

INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Sales');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 80000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', 48000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Payroll Specialist', 45000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accounting Manager', 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Manager', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Paralegal', 40000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Counsul', 75000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Chan', 2, 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Ashley', 'Rodriguez', 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'Tupik', 6, 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Malia', 'Brown', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Sarah', 'Lourd', 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Allan', 8, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Christian', 'Eckenrode', 5, 2);