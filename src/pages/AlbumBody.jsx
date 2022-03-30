import { Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme';
import ImageCard from './ImageCard';

const AlbumBody = (props) => {

    const { albumData, photos } = props;

    const photosRender = photos.map(photosData => {
        if (photosData.albumId === albumData.id) {
            return (
                <ImageCard key={photosData.id} photosData={photosData} />
            )
        }
    })

    return (
        <>
            <Typography sx={{marginLeft: theme.spacing(4)}} variant="h4" gutterBottom component="div">
                {albumData.title}
            </Typography>
            {photosRender}
        </>
    )
}

export default AlbumBody;