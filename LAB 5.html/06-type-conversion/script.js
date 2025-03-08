let amount = '108';
console.log(amount, typeof amount);
//Convert string to number
//amount = parseInt (amount);
//console.log(amount, typeof amount);
//NaN -> Not a Number value is not 

//amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);
console.log('_____________________');
console.log(parseInt("34"));
console.log(parseInt("-56"));
console.log(parseInt("3.14"));
console.log(parseInt("6.022e23"));
console.log(parseInt("hello1"));

console.log('_____________________');
console.log(parseInt("34"));
console.log(parseInt("-56"));
console.log(parseInt("3.14"));
console.log(parseInt("6hello1"));

console.log('_____________________');

amount = '1024';
console.log(amount, typeof amount);

// Convert number to string
amount = amount.toString();
console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

amount = String(amount);
console.log(amount, typeof amount);

console.log('_____________________');


// Convert string to decimal
amount= 1024.38

amount = parseFloat(amount);

console.log(amount, typeof amount);

console.log('_____________________');
