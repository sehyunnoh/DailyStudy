let a = [
    { 'account_#': 'acc' },
    { name: 'JoinKey' },
    { address: 'add' },
    { phone: 'one' },
    { SIN: 'NIS' },
    { DOB: 'BOD' }
  ];

  let joinKey = 'name';
  let modKeys = {};
  for(let i=0; i<a.length; i++){
    let key = Object.keys(a[i])[0];
    if( key === joinKey) {
        modKeys[joinKey] = i;
    }else{
        modKeys[a[i][key]] = i;
    }
  }

  console.log(modKeys);