function chessBoardCellColor(c1, c2) {
    let arr1 = c1.split('');
    let arr2 = c2.split('');

    let first = Number(arr1[1]) + arr1[0].toLowerCase().charCodeAt(0) - 97;
    let second = Number(arr2[1]) + arr2[0].toLowerCase().charCodeAt(0) - 97;

    if(first%2 == second%2) return true;
    return false;

}

console.log(chessBoardCellColor("A1", "C3"));
