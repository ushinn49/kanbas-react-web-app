import { createSlice } from "@reduxjs/toolkit";
import enrollments from "./Database/enrollments.json";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
  showAllCourses: false
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({
        _id: uuidv4(),
        user: userId,
        course: courseId
      });
    },
    unenrollFromCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    }
  }
});

export const { toggleShowAllCourses, enrollInCourse, unenrollFromCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;