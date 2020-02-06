// change to lowercase, remove special character, remove space 

let a = ['Account_#','Family Name','Address','PhoneNumber','DOM'];

const changeVal = (val) => {
    return val.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '');
}

let b = a.map(x=> {return changeVal(x)});

console.log(b);
