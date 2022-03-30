import axios from "axios";

const photosClient = (albumId) => {

	const axiosInstance = axios.create({
		baseURL: `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
		responseType: "json",
		headers: {
			'Content-type': 'application/json'
		}
	});

	return axiosInstance;
};

export default photosClient;