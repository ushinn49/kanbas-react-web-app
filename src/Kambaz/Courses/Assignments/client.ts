import axios from "axios";

// 确保API地址正确，使用https://（而不是http//）
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || 
  (import.meta.env.MODE === "development" 
    ? "http://localhost:4000" 
    : "https://kambaz-node-server-app-a6-qbwt.onrender.com");

// API 基础URL
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// 创建axios实例
const api = axios.create({
  withCredentials: true,
});

// 为指定课程获取所有作业
export const findAssignmentsForCourse = async (courseId: string) => {
  try {
    console.log(`Fetching assignments for course ${courseId}`);
    const response = await api.get(`${COURSES_API}/${courseId}/assignments`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments for course:", error);
    throw error;
  }
};

// 获取特定作业
export const findAssignmentById = async (assignmentId: string) => {
  try {
    const response = await api.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignment:", error);
    throw error;
  }
};

// 创建新作业
export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    console.log(`Creating assignment for course ${courseId}:`, assignment);
    const response = await api.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    console.log("Created assignment:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

// 更新现有作业
export const updateAssignment = async (assignment: any) => {
  try {
    console.log(`Updating assignment ${assignment._id}:`, assignment);
    const response = await api.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    console.log("Updated assignment:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};

// 删除作业
export const deleteAssignment = async (assignmentId: string) => {
  try {
    console.log(`Deleting assignment ${assignmentId}`);
    const response = await api.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    console.log("Delete response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};
