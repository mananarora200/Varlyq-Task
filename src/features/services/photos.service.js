import photosClient from "../../helpers/photosClient";

class PhotosService {
	getAllPhotos = (albumId) => photosClient(albumId).get();
}

export default new PhotosService();