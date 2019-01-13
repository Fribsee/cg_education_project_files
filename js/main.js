console.log("Pump up the jam!!");
let teacher = {
  name: "Sally Jones",
  department: "Physics",
  ratings: [3.4, 4.0, 5.0],
  addTeacherRating(newRating){
    this.ratings.push(newRating)},
  avgTeacherRating: function()
  {
    this.ratings.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue / this.ratings.length}, 0);
  }
}

console.log(teacher);



let studentName = "Pete Davidson";
let email = "This.that@gmail.com";
let gpa = 1.35;
let courseTitle = "Art 101";
let courseDept = "Art";
console.log(`Student Name: ${studentName}
  Email: ${email}
  GPA: ${gpa}`);
console.log(`Department: ${courseDept}
  Course: ${courseTitle}`);




   function enterTeacherRating(){
     return Number(prompt('We would like for you to review. Please enter a rating between 0.0 and 5.0.'))};

    let newRating = enterTeacherRating();

    while(!newRating || newRating < 0 || newRating >5){
      newRating = enterTeacherRating()};




alert("Thanks for your review! " + teacher.name + " average rating is now " + getRatingAvg);
console.log(teacherRatings);

let courses = [
  ['Silly running', 'Physical Education'],
  ['Art 101', 'Art'],
  ['Potato peeling', 'Culinary'],
  ['Pop-locking', 'Physical Education'],
  ['Body Latexing', 'Art'],
  ['Noodle sculpting', 'Culinary']
];

let enterDept = ()=> {return prompt('What department are you looking for a course in?')};
let whatDept = enterDept().toLowerCase();
switch(whatDept){
  case 'art':
  break;
  case 'physical education':
  break;
  case 'culinary':
  break;
  default:
  enterDept();
}

let courseFiltered = [];
function filterByDept(array, dept){
  for (let i = 0; i < array.length; i++){
    if (array[i][1].toLowerCase() === dept)
    {
      courseFiltered.push(array[i][0]);
    }
  }
}

filterByDept(courses, whatDept);
console.log(courseFiltered);


//CG education part 3


 function graduationYear(){
   return prompt('What is your college graduation year?')
 };

function graduationMonth(){
  return prompt('Will you graduate in May or December?')
 };
let gradYear = graduationYear();
let gradMonth = graduationMonth();

while(gradMonth.toLowerCase() !== 'may' && gradMonth.toLowerCase() !== 'december'){
  gradMonth = graduationMonth()};


let welcomeCollegeStudent = function(studentClass){
  alert(`Welcome ${studentClass}!`)
 };

let welcomeHsStudent = function(studentClass){
  alert(`You're still a ${studentClass} in high school!`)
 };

if(gradYear >= 2019 && gradYear <= 2022){
  welcomeStudentsByGraduatingClass(gradMonth,gradYear,welcomeCollegeStudent);
} else if(gradYear >= 2023 && gradYear <= 2027){
  welcomeStudentsByGraduatingClass(gradMonth, gradYear, welcomeHsStudent);
 }
  else{console.log('This graduation year is not in my purview.');
 }



function welcomeStudentsByGraduatingClass(month,year,welcome){
  let currentDate = new Date();
  let gradDifference = year - currentDate.getFullYear();
  switch(gradDifference){
    case 0:
    case 4:
    welcome("Senior");
  break;
    case 1:
    case 5:
    welcome('Junior');
  break;
    case 2:
    case 6:
    welcome('Sophmore');
  break;
    case 3:
    case 7:
    welcome('Freshman');
    break;
    default:
    alert("Get out of here, don't waste my time.")
       }
    }
