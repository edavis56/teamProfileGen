//This is an NPM package that allows me to capture inputs to prompts within the terminal
const inquirer = require('inquirer');

//This is an NPM package that allows me to add a file to the file system    
const fs = require('fs');

//This is where the prompts are created. 
const questions = () =>
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Project Title?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project: ',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How do I use the App?',
            name: 'Functionality',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'List collaborators.',
            name: 'Credits',
        },
        {
            type: 'input',
            message: 'GitHub Links',
            name: 'Links',
        },
    ]);

    //This function creates the formatting for the ReadMe.md file.
    function generateMD(data){
        return`# ${data.Title}

        ## Description:

        ${data.Description}

        ## Table of Contents:
        * Functionality
        * Installation
        * Usage
        * Credits
        * Links
        
        ### Functionality:

        \'\'\'${data.Functionality}\'\'\'
        
        ### Installation:

        \'\'\'${data.Install}\'\'\'

        ### Usage:

        \'\'\'${data.Usage}\'\'\'

        ### Credits:

        \'\'\'${data.Credits}\'\'\'
        
        ### Links:

        \'\'\'${data.Links}\'\'\'`
    }

    //This will create the README.md file with he prompts and inputs.
    questions()
    .then((data) => fs.writeFile('README.md', generateMD(data), function(err){
        if (err) throw err;
        console.log("ReadMe created!");
    }));