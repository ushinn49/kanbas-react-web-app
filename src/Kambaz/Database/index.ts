export interface User {
  _id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  email?: string;
  dob?: string;
  role: "STUDENT" | "FACULTY" | "ADMIN" | "USER" | "TA";
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description?: string;
}

export interface Module {
  _id: string;
  name:string;
  description?: string;
  course?: string;
}

export interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
  course?: string;
}

export interface Enrollment {
    _id: string;
    user: string;
    course: string;
}