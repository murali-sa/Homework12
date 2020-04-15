const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql')
//
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "devuser",
    password: "AbcD123!",
    database: "employeetracker_db"
});
//
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
});
console.log("0 - Success!");
//
// command line input
// prompt user - add or view or update or exit
//
init();
//
// start the program
//
function init() {
    var todo = '';
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "todo",
            choices: [
                "Add",
                "View",
                "Update",
                "Exit"
            ]
        }
    ]).then(function (data) {
        var todo = data.todo;
        console.log("To Do: ", todo);
        console.log(data);
        //
        // switch based on what was chosen
        //
        switch (todo) {
            case 'Add':
                add();
                break;
            case 'View':
                view();
                break;
            case 'Update':
                update();
                break;
            case 'Exit':
                console.log("Thank you.  Have a nice day.");
                connection.end();
                return;
        }
    });
}
//
// function view - department, role, employee, or exit
//
function view() {
    var db = '';
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to VIEW?",
            name: "db",
            choices: [
                "department",
                "role",
                "employee",
                "Go Back"
            ]
        }
    ]).then(function ({ db }) {
        switch (db) {
            case 'department':
            case 'role':
            case 'employee':
                connection.query(`SELECT * FROM ${db}`, function (err, data) {
                    if (err) throw err;
                    console.table(data);
                })
                view();
                break;
            case 'Go Back':
                init();
                return;
        }
    })
}
//
//
// function add - department, role, employee, or exit
//
function add() {
    var toAdd = '';
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to ADD?",
            name: "toAdd",
            choices: [
                "Department",
                "Role",
                "Employee",
                "Go Back"
            ]
        }
    ]).then(function (data) {
        var toAdd = data.toAdd;
        console.log("To Add: ", toAdd);
        console.log(data);
        //
        // switch based on what was chosen
        // add department, add role, add employee, or go back
        //
        switch (toAdd) {
            case 'Department':
                addDepartment();
                break;
            case 'Role':
                addRole();
                break;
            case 'Update':
                addEmployee();
                break;
            case 'Go Back':
                init();
                return;
        }
    });
}
//
function addDepartment() {
    var depName = '';
    inquirer
        .prompt(
            {
                name: 'depName',
                message: "Enter department name:",
                type: 'input'
            }
        ).then(function ({ depName }) {
            // var depName = data.depName;
            // should we check if the department name already exists?
            connection.query(`INSERT INTO department (name) VALUES ('${depName}')`, function (err, data) {
                if (err) throw err;
                console.log(`Added`, depName);
                init();
            })
        })
}
//
function addRole() {
    console.log("add Role:");
}
//
function addemployee() {
    console.log("add Employee:");
}
//
function update() {
    var update = '';
    inquirer
        .prompt(
            {
                name: 'update',
                message: 'What would you like to UPDATE?',
                type: 'list',
                choices: ['role', 'employee', 'Go Back']
            }
        ).then(function ({ update }) {
            switch (update) {
                case 'role':
                    console.log("update role");
                    //        update_role();
                    break;
                case 'employee':
                    //        update_employee();
                    console.log("update employee");
                    break;
                case 'Go Back':
                    init();
                    return;
            }
            init();
        })
}
//
