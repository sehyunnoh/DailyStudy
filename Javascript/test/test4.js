let a = [
  { "account_#": "JoinKey" },
  { name: "Full Name" },
  { address: "HomeAddress" },
  { phone: "PhoneNumber" },
  { SIN: "SIN" },
  { DOB: "DOB" }
];

let joinKey  = 'name';

let b = [
  { "account_#": "acc" },
  { address: "add" },
  { phone: "one" },
  { SIN: "NIS" },
  { DOB: "BOD" }
];

let result = [];
for(let i=0; i < a.length; i++){
  let key = Object.keys(a[i])[0];
  if(key === joinKey){
    result.push({[key]:'JoinKey'});
    continue;
  }

  for(let j=0; j<b.length; j++){
    let innerKey = Object.keys(b[j])[0];
    if(key === innerKey){
      result.push({[key]:b[j][key]});
      break;
    }
  }
}

console.log(result);

