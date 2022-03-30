import actionTypes from "./main.actionTypes";

const photosLoadStart = () => ({
	type: actionTypes.PHOTOS_LOAD_START,
});

const photosLoadSuccess = (photos) => ({
	type: actionTypes.PHOTOS_LOAD_SUCCESS,
	payload: photos,
});

const photosLoadError = (errorMessage) => ({
	type: actionTypes.PHOTOS_LOAD_ERROR,
	payload: errorMessage,
});

const albumLoadStart = () => ({
	type: actionTypes.ALBUM_LOAD_START,
});

const albumLoadSuccess = (album) => ({
	type: actionTypes.ALBUM_LOAD_SUCCESS,
	payload: album,
});

const albumLoadError = (errorMessage) => ({
	type: actionTypes.ALBUM_LOAD_ERROR,
	payload: errorMessage,
});

const updateSearchParam = (searchParam) => ({
	type: actionTypes.UPDATE_SEARCH_PARAM,
	payload: searchParam,
})

export default {
	photosLoadStart,
	photosLoadSuccess,
	photosLoadError,
	albumLoadStart,
	albumLoadSuccess,
	albumLoadError,
	updateSearchParam
};