import axios from "axios";

// Define a minimal type for modules handled by this client
export interface CourseModule {
  _id: string;
  // Add additional properties as needed
  [key: string]: any;
}

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(
        `${MODULES_API}/${moduleId}`
    );
    return response.data;
};

export const updateModule = async (module: CourseModule) => {
    const { data } = await axiosWithCredentials.put(
        `${MODULES_API}/${module._id}`,
        module
    );
    return data;
};