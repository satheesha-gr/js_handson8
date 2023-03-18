// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ]

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ];


// We are interested in retrieving only the students' names; all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

let names=[];
for (let i = 0; i < studentRecords.length; i++) {
    names.push(studentRecords[i].name.toUpperCase());
}
console.log(names);

// Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]

let students = [];
for (let j = 0; j < studentRecords.length; j++) {
    if (studentRecords[j].marks > 50) {
      students.push(Object.assign(studentRecords[j]));
    }
}
console.log(students);

// Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.

let result = [];
for (let k = 0; k < studentRecords.length; k++) {
    if (studentRecords[k].id > 120 && studentRecords[k].marks > 50) {
      result.push(Object.assign(studentRecords[k]));
    }
}
console.log(result);

// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum=0;
for (let l = 0; l < studentRecords.length; l++) {
    sum += studentRecords[l].marks;
}
console.log(sum);

// This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let student_names = [];
for (let m = 0; m < studentRecords.length; m++) {
    if (studentRecords[m].marks > 50) {
        student_names.push(Object.assign(studentRecords[m]));
    }
}
console.log(student_names);

// This time we are required to print the sum of marks of the students with id > 120.

let total=0;
for (let n = 0; n < studentRecords.length; n++) {
    if (studentRecords[n].id > 120) {
        total += studentRecords[n].marks;
    }
}
console.log(total);

// This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let selectedRecords = [];
for (let x = 0; x < studentRecords.length; x++) {
    let record = studentRecords[x];
    if (record.marks < 50) {
        record.marks += 15;
    }
    if (record.marks > 50) {
        selectedRecords.push(record);
    }
}

let totalMarks = 0;
for (let y = 0; y < selectedRecords.length; y++) {
  totalMarks += selectedRecords[y].marks;
}
console.log(totalMarks);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

const student1 = {
    name: "Sanjeev",
    class: 12,
    rollNo: 23,
  };
  
  const student2 = {
    name: "Sans",
    class: 9,
    rollNo: 20,
  };
  const student3 = {
    name: "Arpit",
    class: 5,
    rollNo: 5,
  };
  const student4 = {
    name: "Rohit",
    class: 8,
    rollNo: 45,
  };
  const student5 = {
    name: "Suman",
    class: 12,
    rollNo: 26,
  };
  const student6 = {
    name: "John",
    class: 1,
    rollNo: 10,
  };
  
  let mca_students = [];
  
  const studentRecords2 = (s) => {
    mca_students.push(s);
  };
  
  studentRecords2(student1);
  studentRecords2(student2);
  studentRecords2(student3);
  studentRecords2(student4);
  studentRecords2(student5);
  studentRecords2(student6);
  
  console.log(mca_students);