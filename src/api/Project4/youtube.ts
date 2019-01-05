import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_GOOGLE_API_ACCESS_KEY,
    maxResults: 5,
    part: "snippet"
  }
});
