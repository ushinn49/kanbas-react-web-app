import axios from "axios";

// This configured instance is necessary to send session cookies with requests.
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

/**
 * Fetches all courses from the server.
 * Note: This is a generic fetch and may not be used if the dashboard
 * always fetches courses for the current user.
 */
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

/**
 * Updates an existing course on the server.
 * @param course The full course object with updated information.
 */
export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

/**
 * Deletes a course from the server by its ID.
 * @param courseId The ID of the course to delete.
 */
export const deleteCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};

/**
 * Fetches all modules for a specific course.
 * @param courseId The ID of the course.
 */
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};