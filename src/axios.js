import axios from "asios";

const instance = axios.create({
  basrURL: "https://fb-mern.herokuapp.com/",
});

export default instance;

axios.get("/upload/image");
