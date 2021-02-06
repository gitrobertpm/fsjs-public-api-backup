# FSJS Public API project - Backup REST API

This REST API is just meant to be used as a backup if and when the https://randomuser.me/ API is down.

Property values are randomly retrieved from JSON collection of possible values.

Response result is array of 12 random user objects with the following schema:

```
  {
    "name": {
      "first": "firstName",
      "last": "lastName"
    },
    "email": email,
    "cell": "(503) 555-1234",
    "phone": "(503) 555-4321",
    "location": {
      "street": {
        "number": 5555,
        "name": "streetName streetSuffix"
      },
      "city": "city",
      "state": "state",
      "postcode": 12345
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
```

To run locally, download project, point command line at root of project directory and run `npm install`, then `npm start`.  

Then use the following URL for your `fetch` request - https://fsjs-public-api-backup.herokuapp.com/api.

Visit the above URL in your browser to see a raw, prettified display of the JSON results.