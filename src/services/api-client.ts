import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60912de9cdd74f7eaba7309d2ef3e6f5",
  },
});
