import axios from "axios";

export default axios.create({
	baseURL: "https://itk-exam-api.herokuapp.com/api"
});
