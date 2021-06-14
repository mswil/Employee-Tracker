# Employee-Tracker
## Description
Employee-Tracker is a command line application that tracks useful employee data such as names, titles, department, etc. The user can view this data, add to it, and make minor updates such as changing and employee's title. All changes are saved to a database using mySQL.

## Installation
Make sure you have node.js and mySQL v8.0.25+ installed on your device. Then run `npm install`.

## Usage

1. Open a terminal in the root directory
2. Connect to your local mySQL instance using command line
3. Run command `source db/db.sql` then `source db/schema.sql` to setup the database and tables. You can also run `source db/seeds.sql` to populate the database with some dummy data.
4. Disconnect from your mySQL instance or open another terminal and run command `node server`
5. Use app

## Demo
![Walkthrough Gif](/Employee-Tracker-Walkthrough.gif)
