/*
This is empty on purpose! Your code to build the resume will go here.
 */

var role = "Level 23 Sorcerer";
var name = "Leon Field";
var contactInfo = "ldmfiel@outlook.com";
var pictureUrl = "www.imageurl.com";
var welcomemessage = "hello welcome to the site";
var skills = ["awesomeness", "programming", "teaching", "JS"];

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);


var bio = {
    "name":name,
    "role":role,
    "contactInfo":contactInfo,
    "pictureurl":pictureUrl,
    "welcomemessage":welcomemessage,
    "skills":skills  
};

var work = {
    "job position" : "Lecturer",
    "employer" : "SGS College",
    "yearsworked" : 1,
    "city" : "stroud uk"
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
	]
}

$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);

$("#main").append(bio.name);
$("#main").append(work["job position"]);
$("#main").append(education.lastschool);

