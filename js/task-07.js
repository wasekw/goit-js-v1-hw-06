import users from "./users.js";

const calculateTotalBalance = (users) =>
  users.reduce((acc, user) => {
    return (acc += user.balance);
  }, 0);

console.log(calculateTotalBalance(users)); // 20916
