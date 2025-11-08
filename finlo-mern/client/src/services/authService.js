import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth/'; // Your backend URL

const login = async (email, password) => {
  const response = await axios.post(API_URL + 'login', {
    email,
    password,
  });

  if (response.data.token) {
    // Store the user and token in local storage
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  login,
  // You will add register, logout, etc. here later
};

export default authService;
