const pii = [
    { 'Government-issued identification' : ['SIN', 'DriverLicense', 'PassportNum'] },
    { 'Biometric identifiers (physiological)': ['FingerPrint', 'Hand', 'Face', 'Eye', 'DNA'] },
    { 'Biometric identifiers (behavioral)' : ['Keystroke', 'Signature', 'Voice'] }
  ];
  
  const makeTypeList = pii.map((x, i) => {
    return `<ListItem value={${i}} button className={classes.list}>
      <ListItemText primary="${''+Object.keys(x)}" />
    </ListItem>`
  });
  
  console.log(makeTypeList);