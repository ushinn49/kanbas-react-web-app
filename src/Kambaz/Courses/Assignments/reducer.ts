import { createSlice } from "@reduxjs/toolkit";
import assignments from "../../Database/assignments.json";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // 设置全部作业（从API加载后调用）
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },
    // 添加新作业
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment._id || uuidv4(),
        title: assignment.title || "New Assignment",
        course: assignment.course,
        availableFrom: assignment.availableFrom || new Date().toISOString(),
        availableUntil: assignment.availableUntil || new Date().toISOString(),
        dueDate: assignment.dueDate || new Date().toISOString(),
        points: assignment.points || 100,
        description: assignment.description || ""
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    // 删除作业
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    // 更新现有作业
    updateAssignment: (state, { payload }) => {
      // 处理特殊的SET_ASSIGNMENTS命令
      if (payload && payload.type === "SET_ASSIGNMENTS") {
        state.assignments = payload.payload;
        return;
      }
      
      // 正常更新单个作业
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? { ...a, ...payload } : a
      ) as any;
    }
  }
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
