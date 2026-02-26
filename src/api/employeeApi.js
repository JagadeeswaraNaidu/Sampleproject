import axios from "axios";

export const fetchEmployees = async () => {
  const response = await axios.post(
    "https://backend.jotish.in/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456"
    }
  );

  // ✅ Correct extraction
  return response.data.TABLE_DATA.data;
};