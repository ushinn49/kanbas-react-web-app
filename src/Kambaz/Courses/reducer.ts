import { createSlice} from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";
import type{ Course } from "../Database";

interface CoursesState {
  courses: Course[];
  course: Course;
}


const initialState: CoursesState = {
  courses: [],
  course: {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  }
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {

    setCourse: (state, action: PayloadAction<Course>) => {
      state.course = action.payload;
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },

    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [action.payload, ...state.courses];
      state.course = initialState.course;
    },

    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },

    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    }
  }
});

export const { setCourse, setCourses, addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
