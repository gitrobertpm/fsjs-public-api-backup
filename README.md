# FSJS Public API project - Backup REST API

This REST API is just meant to be used as a backup if and when the https://randomuser.me/ API is down.

To run locally, download project, point command line at root, run `npm install`, then `npm start`.  

Then open any Public API project, and replace fetch request URL with - http://localhost:5000/api.

But be sure to save original Random User URL as this app is only meant as a backup.

Public API project should now work locally and display results of 12 new random users with each new request.

To test the the Public API project over the web, point the fetch at `https://fsjs-public-api-backup.herokuapp.com/api`