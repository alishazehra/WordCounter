#! /usr/bin/env/node
import inquirer from 'inquirer';
import chalk from 'chalk';
// Function to count words in a given string
const countWords = (text) => {
    // Split the text by whitespace and filter out empty strings
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};
// Main function to run the word counter
const runWordCounter = async () => {
    console.log(chalk.green('Welcome to the Word Counter!'));
    const { text } = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter the text you want to count words for:',
        },
    ]);
    const wordCount = countWords(text);
    console.log(chalk.blue(`The text you entered contains ${chalk.bold(wordCount)} words.`));
};
runWordCounter().catch(error => {
    console.error(chalk.red('An error occurred:'), error);
});
