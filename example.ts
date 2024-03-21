function twoFer (person : string="You") : string {
    return 'One for ' + person + ', one for me';
}

console.log(twoFer());
console.log(twoFer("Naveen"));

const isLeapYear = (year : number) : boolean => {
    if (year % 4 === 0 && year % 100 !== 0)  {
            return true;
    }else if (year % 400 ===0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));

  