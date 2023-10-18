import yargs from 'yargs';



const argv = yargs(process.argv.slice(2))
  .option('value1', {
    describe: 'First number',
    type: 'number',
    demandOption: true,
  })


  .option('value2', {
    describe: 'Second number',
    type: 'number',
    demandOption: true,
  })


  .option('operation', {
    describe: 'Math operation (+, -, *, /)',
    type: 'string',
    demandOption: true,
  })
  .argv;

const { value1, value2, operation } = argv;
let result;




switch (operation) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    if (value2 !== 0) {
      result = value1 / value2;
    } else {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    break;
  default:
    console.log("Error: Invalid operation. Use +, -, *, or /.");
    process.exit(1);
}

console.log(`${value1} ${operation} ${value2} = ${result}`);







//node main.js --value1=2 --value2=3 --operation=+ to run