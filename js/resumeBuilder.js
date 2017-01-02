/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*-- Define JScript Object for resume */

var bio = {
    "name": "Leon Field",
    "role": "Lecturer",
    "contacts": {
                    "email" : "ldmfiel@outlook.com",
                    "github" : "ldmfiel",
                    "mobile" : "0000000000",
                    "loation" : "Stroud, UK"
                },
    "pictureurl": "images/profilepic.jpg",
    "welcomemessage": "Welcome to the thunder dome",
    "skills":"Bending time and space"  
};

var work = {
        "jobs" : [
            {
                "employer" : "SGS College",
                "title" : "Game Engines Lecturer",
                "location" : "Stroud, uk",
                "dates" : "September 2015 - Current",
                "description" : "Working with students 16+ training them to develop games using Unreal Engine 4 as-well as teaching games design theory."
            },
            {
                "employer" : "Bouncy Box",
                "title" : "Indie Developer",
                "location" : "Stafford, uk",
                "dates" : "April 2013 - September 2014",
                "description" : "Developed small web and mobile games in a small team of undergrads."
            }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Trousers",
            "dates" : "September 2013",
            "description" : "In Trousers you play as the simplistic yellow dude, P. Collecting a variety of clothing you avoid traps and jump on platforms making use of a variety of different abilities.",
            "images": ["images/Level1.png", "images/new 2.png", "images/mountains.png"]            
        },
        {
            "title" : "Wrapping",
            "dates" : "January 2014-September 2014",
            "description" : "Wrapping was a puzzle platformer using classic screen wrapping mechanics in a platforming title. A working prototype was created before the team moved onto other ventures.",
            "images" : ["images/Boss.gif", "images/Introscene.gif", "images/Level1.gif"]          
        }
    ]
};

var education = {
	"lastschool": "Staffordshire University",
	"yearstring": "2011-2014",

	"schools": [{
			"name": "Staffordshire University",
			"city": "stafford, uk"
		},

		{
			"name": "SGS College",
			"city": "Stroud"
		}
	],
    
    "onlineCourses" : [
        {
            "title" : "Introduction to HTML and CSS",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        
        },
        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]
}

/* jquery begins--> */

$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);

$("#main").append(bio.name);
$("#main").append(work["job position"]);
$("#main").append(education.lastschool);

