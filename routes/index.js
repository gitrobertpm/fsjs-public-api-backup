const express = require('express');
const router = express.Router();
const data = require('../data.json');


// Grab random array item at random index
const rando = (arr) => arr[Math.floor(Math.random() * arr.length)];


// Get date within range for any month
const getDay = (month) => {

  // No more than 28 days for February
  if (month === 02) {
    return rando(data.numbers.slice(0, 28));
  }
  
  // No more than 30 days for even months with 30 days
  if (month < 7 && month % 2 === 0) {
    return rando(data.numbers.slice(0, 31));
  }

  // No more than 30 days for odd months with 30 days
  if (month > 8 && month % 2 !== 0) {
    return rando(data.numbers.slice(0, 31));
  }

  // Months with 31 days
  return rando(data.numbers);
};


// Build unique userName
const getUserName = () => {

  // Roll twelve sided die for randomness
  const dieRoll = Math.ceil(Math.random() * 12);

  // Base username
  let userName = rando(data.emails.usernames);

  // Add two numbers to end of userName
  if (dieRoll > 2 && dieRoll < 9) {
    userName += rando(data.numbers)
  }

  // Add four numbers to end of userName
  if (dieRoll > 8) {
    userName += rando(data.years)
  }

  return userName
}



const generateUser = () => {

  // Build multi-step values
  const userName = getUserName();
  const email = `${userName}@${rando(data.emails.domains)}${rando(data.emails.extensions)}`;

  const street = `${rando(data.addresses.streets.numbers)} ${rando(data.addresses.streets.names)} ${rando(data.addresses.streets.suffixes)}`;
  const month = rando(data.numbers.slice(0, 12));
  const day = getDay(month);
  const date = `${rando(data.years)}/${month}/${day}`
  const profilePic = rando(data.images);

  // API User Schema
  return {
		"name": {
			"first": rando(data.names.firsts),
			"last": rando(data.names.lasts)
		},
    "email": email,
    "cell": "(503) 555-1234",
    "location": {
      "street": street,
      "city": rando(data.addresses.cities),
      "state": rando(data.addresses.states),
      "postcode": rando(data.addresses.zipcodes)
    },
    "dob": {
      "date": date
    },
		"picture": {
      "large": profilePic,
			"medium": profilePic,
			"thumbnail": profilePic
    }
	}
}

// Create array of users
const getArrOfUsers = () => {
  const users = [];
  for (let i = 0, j = 12; i < j; i++) {
    users.push(generateUser());
  }
  return users;
}

/* GET - home '/api' route - return JSON for twelve random users */
router.get('/', async(req, res, next) => {
  try {
    const arrOfUsers = { results: getArrOfUsers() };
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(arrOfUsers, null, 4));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
