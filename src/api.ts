import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your Express API base URL

export const getUserData = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postData = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
