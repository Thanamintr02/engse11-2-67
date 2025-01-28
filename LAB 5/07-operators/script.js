// + - 
// * /
// div mod
// ()


console.log (1+2*2-3);

console.log ((1+2)*2-3);

console.log (6%2);

console.log (6 != 2);

console.log(2 =='2'); //convert to same type
console.log(2 ==='2'); // not convert to same type

if (2== '2') console.log("OK");
if (!(2==='2')) console.log("Not to be OK");
    
//and
//0 && 0 =0
//0 && 1 =0
//1 && 0 =0
//1 && 1 =1

//or
//0 || 0 =0
//0 || 1 =1
//1 || 0 =1
//1 || 1 =1


if (false && true ) console.log("AND OK");

if (false || true ) console.log("or OK");
        
if ( (1=='1') && (3=='3') ) console.log(" OK");

    if ( (1=='1') && (3=='3')&& (4=='4')) 
        console.log(" OK");
    else
    console.log("NOT OK");
