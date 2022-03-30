import axios from "axios";

const albumClient = () => {

	const axiosInstance = axios.create({
		baseURL: "https://jsonplaceholder.typicode.com/albums",
		responseType: "json",
		headers: {
			'Content-type': 'application/json'
		}
	});

	return axiosInstance;
};

export default albumClient;