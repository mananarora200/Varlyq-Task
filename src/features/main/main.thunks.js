import PhotosService from "../services/photos.service";
import AlbumService from "../services/album.service";
import actions from "./main.actions";
import genRandom from "../../helpers/genRandom";

let randomNubers = [];

export const loadPhotosAsync = (albumId, photosCount) => (dispatch) => {
	dispatch(actions.photosLoadStart());

	PhotosService.getAllPhotos(albumId)
		.then((response) => {
			let data = response.data.slice(0, photosCount);
			data = data.map( (val,ind) => {
				return (
					{...val, price: randomNubers[(albumId-1)*10+ind]}
				)
			})
			
			dispatch(actions.photosLoadSuccess(data))
		})
		.catch((error) => dispatch(actions.photosLoadError(error.message)));
};

export const loadAlbumAsync = (albumCount, photosCount) => (dispatch) => {
	dispatch(actions.albumLoadStart());
	randomNubers = [...genRandom(albumCount*photosCount)];
	AlbumService.getAllAlbum()
		.then((response) => dispatch(actions.albumLoadSuccess(response.data.slice(0, albumCount))))
		.catch((error) => dispatch(actions.albumLoadError(error.message)));
};

export const updateSearchQuery = (searchParam) => (dispatch => {
	dispatch(actions.updateSearchParam(searchParam))
});

