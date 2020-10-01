let day = document.getElementById("day");
let name = document.getElementById("name");

// startDate from first day we did supervised lunches
let startDate = new Date("09/20/2020");
let currentDate = new Date();
  
// calculate the time difference in Milliseconds
let Difference_In_MS = currentDate.getTime() - startDate.getTime();

let Difference_In_Days = Math.ceil(Difference_In_MS / (1000 * 3600 * 24)); 

// remove weekend days if appropriate
let removeWeekends = Difference_In_Days < 7 ? 
    Difference_In_Days 
    : 
    Difference_In_Days - (Math.floor((Difference_In_Days / 7) * 2))

let assignedTA;

const recursiveSubtract = removeWeekends => {
    // if removeWeekends <= 3 assign a TA, else recursively subtract 3
    if (removeWeekends === 1) assignedTA = "Gage";
    else if (removeWeekends === 2) assignedTA = "Kieran";
    else if (removeWeekends === 3) assignedTA = "Matt";
    else recursiveSubtract(removeWeekends - 3);
}

recursiveSubtract(removeWeekends);

// set date to date only without time and populate elements
day.innerText = currentDate.toLocaleDateString();
name.innerText = assignedTA;