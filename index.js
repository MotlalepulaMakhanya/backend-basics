import greet from './greet.js'
import yo from './greet.js'
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

figlet('Hello, Ntombi!', function(err, data) {
    if (err) {
        console.log('Something went wrong');
        console.dir(err);
        return;
    }
    console.log(data);
});
const cowMessage = cowsay.say({
    text: greet('Xola')
})
console.log(cowMessage)

console.log(chalk.bgBlue.white(cowsay.say({
    text: "Hello, World!"
})));

const styledMessage = chalk.bgGreen.whiteBright(greet('Xola'));
console.log(styledMessage)



// call the function & print the result on the screen
console.log(greet('Xola'));
console.log(yo('Makhanya'));
