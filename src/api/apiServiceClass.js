import { baseInstance } from "./instances";

class ApiServiceClass {
    getPage = async (page) => {
        try {
            const path = `/${page.toLowerCase()}.json`;
            const response = await baseInstance.get(path);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    getPages = async () => {
        try {
            const path = `/.json`;
            const response = await baseInstance.get(path);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    editPage = async (page, editedPage) => {
        try {
            const path = `/${page.toLowerCase()}.json`;
            await baseInstance.put(path, editedPage);
        } catch (error) {
            throw error;
        }
    }
};

export const apiService = new ApiServiceClass();