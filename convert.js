import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = 'sample.md';
const outputFile = 'output.html';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(chalk.red('Error reading file:'), err);
        return;
    }

    const htmlContent = marked(data);
    fs.writeFile(outputFile, htmlContent, (err) => {
        if (err) {
            console.error(chalk.red('Error writing file:'), err);
            return;
        }
        console.log(chalk.green('Markdown successfully converted to HTML!'));
    });
});
