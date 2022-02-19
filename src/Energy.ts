/*
* This program calculates how much energy will be generated
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-02-15
*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const LIGHTSPEED = 2.998;
const userInputString = prompt('Insert the mass of the object in Kg:');
const userInput = parseFloat(userInputString)
const energy = (userInput * LIGHTSPEED * LIGHTSPEED);
try {
  if(isNaN(userInput)) throw "Invalid Input";
    console.log("\nThe amount of energy the object would produce is:" + energy + " x10¹⁶ joules");
  }finally {
	console.log("Please Enter A Number")
}
console.log("\nDone")
                         
