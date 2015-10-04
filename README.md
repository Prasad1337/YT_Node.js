# YT_Node.js
Node.js application consisting of a single playlist module with YouTube’s public search API

RUN INSTRUCTIONS
This application was intended to run using WebStorm <https://www.jetbrains.com/webstorm/> with Node.js already installed

DESIGN DECISIONS
I opted for Node.js express and EJS
Using 'youtube-search' npm, a JSON object is fetched and then stored in a file. This file is essentially used as a global variable for accessing and displaying the data.

NOTES
This is my first ever attempt with Node and albeit the application isn't complete (get requests unfulfilled when selecting from dropdown list), it has been an exceptionally great learning and fun experience overall!
Difficulties were faced primarily because I made the mistake of choosing Windows as my development environment. Herein, I spent several hours setting up mongodb, python and visual studio and then debugging the issues faced by the 'mongoose' npm, which required all of the above. Ultimately, in the interest of time, I opted for a file based approach instead.
I was also entirely new to the Youtube API and had great pleasure working with it for the first time.
