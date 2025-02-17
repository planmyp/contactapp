// src/api/HomePoojaKitService.js

import axios from "axios";

const API_URL = 'http://localhost:8080/home';

// Function to get all Home Pooja Kits
const getAllHomePoojaKits = async () => {
  try {
    const response = await axios.get(`${API_URL}/poojaKits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Home Pooja Kits:', error);
    throw error;
  }
};

// Export the service functions
const HomePoojaKitService = {
  getAllHomePoojaKits
};

export default HomePoojaKitService;
