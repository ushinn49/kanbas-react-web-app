import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
console.log("REMOTE_SERVER:", REMOTE_SERVER);
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;
console.log("COURSES_API:", COURSES_API);

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    try {
        console.log("Sending request to create module:", module, "for course:", courseId);
        console.log("API URL:", `${COURSES_API}/${courseId}/modules`);
        const response = await axiosWithCredentials.post(
            `${COURSES_API}/${courseId}/modules`,
            module
        );
        console.log("Server response:", response);
        return response.data;
    } catch (error) {
        console.error("Error creating module:", error);
        throw error;
    }
};

export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
};

export const getCourse = async (id: string) => {
    const response = await axios.get(`${COURSES_API}/${id}`);
    return response.data;
};