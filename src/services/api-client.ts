import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b11151e652b043c4adfc4568d6fe7544",
  },
});
