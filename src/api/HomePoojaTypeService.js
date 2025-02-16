import axios from "axios";

const API_URL = 'http://localhost:8080/home';

// export async function saveContact(contact) {
//     return await axios.post(API_URL, contact);
// }


// Base URL for the Spring Boot backend
// const BASE_URL = 'http://localhost:8080/api/cards';

// Function to get all Home Pooja Types
const getAllHomePoojaTypes = async () => {
  try {
    // const response = await axios.get(API_URL);
    // return await axios.get(`${API_URL}/${id}`);
    const response = await axios.get(`${API_URL}/poojaTypes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Home Pooja Types:', error);
    throw error;
  }
};

// You can add more functions for other CRUD operations later
// Example: Create, Update, Delete

// Export the service functions
const HomePoojaTypeService = {
  getAllHomePoojaTypes
};

export default HomePoojaTypeService;