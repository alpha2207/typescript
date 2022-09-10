// Just for Debugging
let age: number = 20;
if (age < 50)
    age += 10
console.log(age);

// If we don't specify the type then ts itself declare it as any which is waste all the motive to use the ts.

let num;
console.log(typeof (num));

// if type of variable is already defined then intelllisense show related properties to autocomplete. Yayyyy!

let n = [1, 2, 3];
n.map(item => item.toExponential())

//  Ts for functions
function incomeTax(income: number, taxYear: number): number {
    if (taxYear > 20_000) {
        return income * 20;
    }
    return income * 10;
}