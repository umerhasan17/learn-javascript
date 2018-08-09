// Web scraping from the free code camp forum

// easier to make AJAX requests from other websites.
const rp = require('request-promise') 

// makes it easier to navigate the DOM inside the web page
const cheerio = require('cheerio');

// easier to format out information. For this it will just display in the console.
const Table = require('cli-table');

let users = [];
let table = new Table({
    head: ('username' , 'hearts' , 'challenges'),
    colWidths: [15 , 5 , 10]
})

// the page loads the information in javascript so can't just type in the url page. 
// try to find an API that is giving all of the information on the web page
// go to the network tab in devTools to see all the different calls its making to get the information on the page
// try to figure out if there is a list of users in this example
const options = {
    url: 'https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1533749547678',
    // result will pass the json for us
    json: true,
}

// do ajax request and return a promise. .then = once the information comes back from the website
rp(options)
    .then((data) => {
        let userData = [];
        for (let user of data.directory_items) {
            userData.push({name : user.user.username , likes_received: user.likes_received});
        }
        // this doesn't add a newline at the end unlike console.log
        process.stdout.write('loading');
        getChallengesCompletedAndPushToUserArray(userData);
    })
    .catch((err) => {
        console.log(err);
    });

// go through each user and make another request for each user. 
// So all the requests are in order. 
// Hence all the requests will be in order because the requests are asynchronous. 
function getChallengesCompletedAndPushToUserArray(userData) {
    var i = 0;
    function next() {
        // if not at the end of the list. set up a new request.
        
        // userData.length - this is when we want to get all of the users. But not enough internet in Pakistan.
        if (i < 10) {
            var options = {
                url: 'https://www.freecodecamp.org/' + userData[i].name , 
                transform: body => cheerio.load(body)
            }
            rp(options)
                .then(function ($) {
                    process.stdout.write('.');
                    // check if the page which we're getting challenges from is the actual user page. 
                    const fccAccount = $('h1.landing-heading').length == 0;
                    // counting the number of rows. number of rows is the number of challenges
                    // web scraping: what do you need to count? to get the actual data.
                    const challengesPassed = fccAccount ? $('tbody tr').length : 'unknown';
                    table.push([userData[i].name , userData[i].likes_received , challengesPassed]);
                    ++i;
                    // keep running the function until i is less than user.length
                    return next();
                })
        }
        else {
            // this is the base case
            printData();
        }
    }

    // have to actually call the function
    return next();
};

function printData() {
    console.log("Yeet");
    console.log(table.toString());
}