import axios from "axios";
export default axios.create({
  baseURL: "https://www.fruityvice.com/api/fruit/all",
  headers: {
    "Content-type": "application/json"
  }
});