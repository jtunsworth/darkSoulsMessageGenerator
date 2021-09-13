# Dark Souls Message Generator

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)



## General Information
- For the Codecademy project 'Mixed Messages' I have programmed a random message generator based upon the Soulsborne games developed by *FromSoftware*.
- The aim is to create a function that output a random message. 
- 

## Technologies Used
- JavaScript
- Node
- git
- Programmed using Visual Studio Code


## Features
- To use the function simply input the code into your script and console.log the function 'yourDSMEssage()'. 
- You can also add the function to a HTML document. Perhaps to activate in a text box onclick?


## Screenshots
(.\darkSoulsMessageGenerator\screenshot.png)


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
The function is constructed using 5 different arrays. To see the function code (minsu arrays) see below:

function yourDSMessage() {
        let name = 
        dsMessage.userName[
            Math.floor(Math.random() * dsMessage["userName"].length)
        ];
    
        let pt1 = 
        dsMessage.msgPT1[
            Math.floor(Math.random() * dsMessage["msgPT1"].length)
        ];
    
        let pt2 = 
        dsMessage.msgPT2[
            Math.floor(Math.random() * dsMessage["msgPT2"].length)
        ];
    
        let pt3 = 
        dsMessage.msgPT3[
            Math.floor(Math.random() * dsMessage["msgPT3"].length)
        ];
    
        let pt4 = 
        dsMessage.msgPT4[
            Math.floor(Math.random() * dsMessage["msgPT4"].length)
        ];
        
        return (
            name + ' ' + pt1 + ' ' + pt2 + ' ' + pt3 + ' ' + pt4
        );
    };
    




