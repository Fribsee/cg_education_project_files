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
