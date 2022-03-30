import actionTypes from "./main.actionTypes";
import initialState from "./main.initialState";

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.PHOTOS_LOAD_START:
            return {
                ...state,
                isPhotosLoading: true,
                photos: [],
                errorPhotosMessage: null,
            };

        case actionTypes.PHOTOS_LOAD_SUCCESS:
            return {
                ...state,
                isPhotosLoading: false,
                photos: [...state.photos, ...payload],
            };

        case actionTypes.PHOTOS_LOAD_ERROR:
            return {
                ...state,
                isPhotosLoading: false,
                errorPhotosMessage: payload,
            };

        case actionTypes.ALBUM_LOAD_START:
            return {
                ...state,
                isAlbumLoading: true,
                album: null,
                errorAlbumMessage: null,
            };

        case actionTypes.ALBUM_LOAD_SUCCESS:
            return {
                ...state,
                isAlbumLoading: false,
                album: payload,
            };

        case actionTypes.ALBUM_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorAlbumMessage: payload,
            };

        case actionTypes.UPDATE_SEARCH_PARAM:
            return {
                ...state,
                searchParam: payload
            }

        default:
            return state;
    }
};

export default mainReducer;