function missedClasses(year, daysOfTheWeek, holidays) {
    let result = 0;
    for(let i=0; i<holidays.length; i++){
        let checkdate = '';
        if( +holidays[i].slice(0,2) >= 8){
            checkdate+=`${year}-${holidays[i]}`;
        }else{
            checkdate+=`${+year+1}-${holidays[i]}`;
        }
        let d = new Date(checkdate);
        if(daysOfTheWeek.includes(d.getDay()+1)) result++;
    }
    return result;
}

console.log(missedClasses(2015, [2, 3], ["11-04", 
     "02-22", 
     "02-23", 
     "03-07", 
     "03-08", 
     "05-09"])); 
     // 3