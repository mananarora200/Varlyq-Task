import albumClient from "../../helpers/albumClient";

class AlbumService {
	getAllAlbum = () => albumClient().get();
}

export default new AlbumService();