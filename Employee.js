//checking 
const present = 1;

let isPresent = Math.floor(Math.random()*10)%2;

if(isPresent == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is not Present");
}

//UC-2
//calculating dailywage of an employee without a function
let workingHours = Math.floor(Math.random()*10)%3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

switch(workingHours){

    case isPartTime:
        workingHours = partTime;
        break;

    case isFullTime:
        workingHours = fullTime;
        break;

    default :
        workingHours = 0;
        break;

}

let wage = wagePerHour*workingHours;

console.log("Daily wage generated for employee is ",wage);

//UC-3
const numberOfWorkingDays = 20;

let empHrs = 0;

for(let i = 1; i<=numberOfWorkingDays;i++){
    let empCheck = Math.floor(Math.random()*10)%3;    //getting fulltime, partime or notime status
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs*wagePerHour;
console.log("Monthly Wage of the Employee for hours "+empHrs+" is "+empWage);

//UC-4

empHrs = 0;
let numberOfTotalDays = 0;
while(empHrs <= 160 && numberOfTotalDays < 20){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
    numberOfTotalDays++;

}
empWage = empHrs*wagePerHour; 

console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+empHrs+", Wage of Employee is : "+empWage);


//UC-5

function getWage(empHrs){
    return empHrs*wagePerHour;
}

const maxWorkingHrs = 160;
const maxWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = new Array();

numberOfTotalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;

}

