// const originCol = {
//   orgCol: ["account_#", "name", "address", "phone", "SIN", "DOB"]
// };
// const orgCol = originCol.orgCol;
// const joinKey = "account_#";
// const configJSON = {
//   Fields: [
//     { name: "Full Name" },
//     { address: "HomeAddress" },
//     { phone: "PhoneNumber" },
//     { SIN: "SIN" },
//     { DOB: "DOB" }
//   ]
// };
// const Fields = configJSON.Fields;

// { account_#: 0, "Full Name": 1, "HomeAddress": 2, "PhoneNumber" : 3, "SIN": 4, "DOB": 5}
///////////////////////////////////////////////////////////////////////////////////////

const originCol = {
    orgCol: ["account_#", "name", "address", "phone", "SIN", "DOB"]
  };
  const orgCol = originCol.orgCol;
  const joinKey = "name";
  const configJSON = {
    Fields: [
      { 'account_#': "account" },
      { address: "HomeAddress" },
      { phone: "PhoneNumber" },
      { SIN: "SIN" },
      { DOB: "DOB" }
    ]
  };
  const Fields = configJSON.Fields;
// { account: 0, "name": 1, "HomeAddress": 2, "PhoneNumber" : 3, "SIN": 4, "DOB": 5}

let modKeys = {};
for(let i=0; i<orgCol.length; i++){
    if(orgCol[i] === joinKey){
        modKeys[joinKey] = i;
    }else{
        for(let j=0; j<Fields.length;j++){
            let keys = Object.keys(Fields[j])[0];
            if(orgCol[i] === keys){
                modKeys[Fields[j][keys]] = i;
                break;
            }
        }
    }
}

console.log(modKeys);