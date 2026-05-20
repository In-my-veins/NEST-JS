// Lesson: optional properties and union types

type Student = {
  readonly id: number;
  name: string;
  age: number;
  email?: string;
};

let student1: Student = {
  id: 1,
  name: "Aime",
  age: 20,
  email: "aime@example.com",
};

let student2: Student = {
  id: 2,
  name: "Sarah",
  age: 17,
};

function printStudent(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);

  if (student.email) {
    console.log(`Email: ${student.email}`);
  } else {
    console.log("Email: not provided");
  }
}

printStudent(student1);
printStudent(student2);

type Status = "pending" | "approved" | "rejected";

function showStatus(status: Status): string {
  if (status === "pending") {
    return "Your request is still waiting.";
  }

  if (status === "approved") {
    return "Your request was approved.";
  }

  return "Your request was rejected.";
}

console.log(showStatus("pending"));
console.log(showStatus("approved"));
console.log(showStatus("rejected"));

// Mini exercise:
// 1. Create a type called Course.
// 2. It should have: title, duration, and optional teacher.
// 3. Create two courses: one with a teacher and one without.
// 4. Create a function that prints course information.
