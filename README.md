# FSJS Public API project - Backup REST API

This REST API is just meant to be used as a backup if and when the https://randomuser.me/ API is down.

To run locally, download project, point command line at root, run `npm install`, then `npm start`.  

Then open any Public API project, and replace fetch request URL with - http://localhost:3000/api.  

Public API project should now work and display results of 12 new random users with each new request.