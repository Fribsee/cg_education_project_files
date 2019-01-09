console.log("Pump up the jam!!");
let teacherName = "Sally Jones";
let department = "Physics";
let rating1 = 3.4;
let rating2 = 4.0;
let rating3 = 5.0;
console.log(
`Teacher: ${teacherName}
Department: ${department}
Ratings: ${rating1.toFixed(1)}, ${rating2.toFixed(1)}, ${rating3.toFixed(1)}`);

let avgRating = (rating1 + rating2 + rating3)/3;
console.log(`Avg. Rating: ${avgRating.toFixed(5)}`);

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

  let teacherRatings = [rating1, rating2, rating3];



   function enterTeacherRating(){
     return Number(prompt('We would like for you to review. Please enter a rating between 0.0 and 5.0.'))};

    let newRating = enterTeacherRating();

  while(!newRating || newRating < 0 || newRating >5){
      newRating = enterTeacherRating()};


function addTeacherRating(array, rating){
  return array.push(rating)};

addTeacherRating(teacherRatings, newRating);

let getRatingAvg =
  teacherRatings.reduce((accumulator, currentValue)=>{
   return accumulator + currentValue / teacherRatings.length}, 0);

alert("Thanks for your review! " + teacherName + " average rating is now " + getRatingAvg);
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
   return prompt('What is your graduation year?')
 };

function graduationMonth(){
  return prompt('Will you graduate in May or December?')
};
let gradYear = graduationYear();
let gradMonth = graduationMonth();

while(gradMonth.toLowerCase() !== 'may' && gradMonth.toLowerCase() !== 'december'){
  gradMonth = graduationMonth()};




console.log(gradMonth);
