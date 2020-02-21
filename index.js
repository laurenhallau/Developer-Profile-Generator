//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateHTML = require("./generateHTML"); 

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

// Function is generating the user response from the prompt questions
function generate() {
    inquirer.prompt(questions).then(function(response){
        console.log(response); 

        const queryURL = `https://api.github.com/users/${response.username}`;
        //first axios call
        // console.log(queryURL);
        axios.get(queryURL).then(function(answer) {
            console.log(answer.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        // .then(function (generateHTML) {
        //     fs.writeFile("index.html", generateHTML, function (err) {
        //         if (err) {
        //             throw err;
        //         } else {
        //             console.log("success!");
        //         }
        //     })
        // })
        
    });
    
}
generate();

