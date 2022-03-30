import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadPhotosAsync } from "../features/main/main.thunks";
import { loadAlbumAsync } from "../features/main/main.thunks";
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';
import AlbumBody from './AlbumBody';

const Body = () => {

    const dispatch = useDispatch();
    const { isPhotosLoading, photos, isAlbumLoading, album, albumCount, photosCount, searchParam } = useSelector((state) => state.main);

    const [updatedPhotos, setUpdatedPhotos] = useState(photos);
    const [updatedAlbum, setUpdatedAlbum] = useState(album);

    useEffect(() => {
        dispatch(loadAlbumAsync(albumCount, photosCount));
    }, []);

    useEffect(() => {
        if (!isAlbumLoading && album) {
            album.map(albumData => {
                dispatch(loadPhotosAsync(albumData.id, photosCount))
            })
        setUpdatedAlbum(album)
        }
    }, [isAlbumLoading])

    useEffect(() => {
        if (searchParam === "") {
            return;
        }

        let queryPhotos = [];
        let queryAlbum = [];

        queryPhotos = photos.filter(val => {
            if (val.title.includes(searchParam)) {
                return val;
            }
        })

        queryAlbum = album.filter(val => {
            if( queryPhotos.some((el) => {
                return el.albumId === val.id
            }) ) {
                return val;
            }
        })

        setUpdatedPhotos(queryPhotos);
        setUpdatedAlbum(queryAlbum)

    }, [searchParam])

    return (
        <>
            {
                (isPhotosLoading && isAlbumLoading) ?
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box> :
                    updatedAlbum.map(albumData => {
                        return (
                            <AlbumBody albumData={albumData} key={albumData.id} photos={(updatedPhotos.length===0 && searchParam==="")?photos:updatedPhotos} />
                        )
                    }
                )
            }
        </>
    )
}

export default Body