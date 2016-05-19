
//top level. 
function Employee (first, last) { //if you don't want to make the decision about first and last now, you can say first ="", last = "" and then you don't have to pass in an argument right away. 
  this.firstName = first;
  this.lastName = last;
  this.department = "";
  this.job = "";
}


/////////
function Department (deptname) {
  this.deptname = deptname;
}

//a kind of department: inheritance.
function Headquarters (){
  this.location = "Nashville"
}
Headquarters.prototype = new Department('Headquarters');

//a kind of department: inheritance. 
function FieldOffice (location) {
  // Department.call(this,deptname)
  this.location = location;
}
FieldOffice.prototype = new Department("Field Office");

//////////////

function Job (job) {
  this.jobname = job;
}
//a kind of job: inheritance.
function Clinician (expertise) {
  this.expertise = expertise;
}
Clinician.prototype = new Job("Clinician");

//a kind of job: inheritance.
function Operations (responsibility) {
  this.responsibility = responsibility;
}
Operations.prototype = new Job("Operations");


//employee one. 
var johnSmith = new Employee("John", "Smith");
johnSmith.department = new Headquarters();
johnSmith.job = new Clinician("pipetting");

console.log("John Smith:", johnSmith );
console.log(`${johnSmith.firstName} ${johnSmith.lastName} is a ${johnSmith.job.jobname} in the ${johnSmith.department.location} ${johnSmith.department.deptname} and is an expert in ${johnSmith.job.expertise}.` );

//employee two. 
var amyRussell = new Employee("Amy", "Russell");
amyRussell.department = new FieldOffice("Boston");
amyRussell.job = new Operations("filing paperwork");

console.log("Amy Russell:", amyRussell );
console.log(`${amyRussell.firstName} ${amyRussell.lastName} is in ${amyRussell.job.jobname} in the ${amyRussell.department.location} ${amyRussell.department.deptname} and is responsible for ${amyRussell.job.responsibility}.` );

//employee three.
var ericPrince = new Employee("Eric", "Prince");
ericPrince.department = new FieldOffice("Rio");
ericPrince.job = new Operations("surfing");

console.log("Eric Prince:", ericPrince );
console.log(`${ericPrince.firstName} ${ericPrince.lastName} is in ${ericPrince.job.jobname} in the ${ericPrince.department.location} ${ericPrince.department.deptname} and is responsible for ${ericPrince.job.responsibility}.` );


//employee four.
var karenOrange = new Employee("Karen", "Orange");
karenOrange.department = new FieldOffice("Cleveland");
karenOrange.job = new Clinician("cat dentistry");

console.log("Eric Prince:", karenOrange );
console.log(`${karenOrange.firstName} ${karenOrange.lastName} is in ${karenOrange.job.jobname} in the ${karenOrange.department.location} ${karenOrange.department.deptname} and is an expert in ${karenOrange.job.expertise}.` );
