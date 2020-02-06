let a = [
  { "account_#": "JoinKey" },
  { name: "Full Name" },
  { address: "HomeAddress" },
  { phone: "PhoneNumber" },
  { SIN: "SIN" },
  { DOB: "DOB" }
];

let b = 'phone';
let tmp ;

for( let i=0; i<a.length; i++){
    if( Object.keys(a[i])[0] === b) {
        tmp = a[i][b];
        break;
    }
}

console.log(tmp);
