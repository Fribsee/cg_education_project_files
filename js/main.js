console.log("Pump up the jam!!");

function enterTeacherRating(){
  return Number(prompt('We would like for you to review. Please enter a rating between 0.0 and 5.0.'))
};
let newRating = enterTeacherRating();

while(!newRating || newRating < 0 || newRating >5){
  newRating = enterTeacherRating()
};
function Teacher (name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
  this.addTeacherRating = function(rating)
    {
    this.ratings.push(rating)
    };

  this.avgRating = function()
    {
      return this.ratings.reduce(function(accumulator, currentValue,currentIndex,array) {
          return accumulator + currentValue / array.length}, 0);
    };
  this.addRating = this.addTeacherRating(newRating);
}

let sallyTeacher = new Teacher("Sally Jones", "Physics", [3.4, 4.0, 5.0]);
console.log(sallyTeacher.ratings);
// the this keyword is wonky therefore instead of calling this.ratings.length,
// I had to use all parameters of the reduce function and call it
// array.length and I am not entirely sure why, beyond having been 2 layers deep in
// the teacher object rather than 1 like for the previous this.

// Here is another option for the avgTeacherRating function:
// avgTeacherRating () {
//     var total = 0;
//     for(i=0; i < this.ratings.length; i++) {
//       total = total + this.ratings[i];
//     }
//   return total / this.ratings.length;
//   }
// };










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


let courses ={
  name: ['Silly running', 'Pop-locking', 'Art 101', 'Body Latexing', 'Potato peeling', 'Noodle sculpting'],
  department: ['Physical Education', 'Physical Education', 'Art', 'Art', 'Culinary', 'Culinary'],
  teacher: ['Glenda Shorts', 'Sally Strong', 'Luther Bobross', 'Ed Kilnamanjaro', 'String Beanpole', 'Larry Wasserman'],
  semester: ['May', 'December','May', 'December','May', 'December','May', 'December'],
};


console.log(courses.teacher[1]);

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
function filterByDept(array, array2, dept){
  for (let i = 0; i < array.length; i++){
    if (array[i].toLowerCase() === dept)
    {
      courseFiltered.push(array2[i]);
    }
  }
}

filterByDept(courses.department, courses.name, whatDept);
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
