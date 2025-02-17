import axios from "axios";

const API_URL = 'http://localhost:8080/home';

// Function to get all Pandits
const getAllPandits = async () => {
  try {
    const response = await axios.get(`${API_URL}/pandits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pandits:', error);
    throw error;
  }
};

// You can add more functions for other CRUD operations later
// Example: Create, Update, Delete

// Export the service functions
const HomePanditService = {
  getAllPandits
};

export default HomePanditService;
