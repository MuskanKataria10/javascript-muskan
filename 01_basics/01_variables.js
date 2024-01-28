const accountId = 144553
let accountEmail = "muskan@google.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mk@mk.com"
accountPassword = "10102002"
accountCity = "Gurugram"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])