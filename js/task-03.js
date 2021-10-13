import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  // const userOfGender = users.filter((user) => user.gender === gender);
  // return userOfGender.map((user) => user.name);

  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
