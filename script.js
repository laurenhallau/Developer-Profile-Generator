const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
const axios = require("axios");

//Questions to prompt user:
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: ["red", "green", "blue", "purple", "yellow"]
    },
];

// Creating a html generate function
