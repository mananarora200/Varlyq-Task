import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material/node_modules/@mui/system';
import { theme } from '../theme';
import Link from '@mui/material/Link';

export default function ImageCard(props) {

    const { photosData } = props;
    const current = new Date();

    return (
        <Box sx={{ margin: theme.spacing(4) }} >
            <Card sx={{ maxWidth: 1400, display: "flex", height: theme.spacing(12) }}>
                <CardMedia sx={{ width: theme.spacing(12) }}
                    component="img"
                    height="100"
                    image={photosData.thumbnailUrl}
                    alt="Image"
                />
                <CardContent sx={{width:"100%"}} >
                    <Box sx={{display:"flex", justifyContent:"space-between", width:"100%" }} >
                        <Box>
                            <Typography gutterBottom variant="h6" component="div">
                                {photosData.title}
                            </Typography>
                            <Link sx={{ cursor: "pointer" }} href={photosData.url} target="_blank" >
                                <Typography component="div" color="text.secondary">
                                    {photosData.url}
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize:theme.spacing(3), color:photosData.price>75? "green": "red"}} gutterBottom variant="h6" component="div">
                                {photosData.price} $
                            </Typography>
                            <Typography sx={{fontSize:theme.spacing(2)}} gutterBottom variant="h6" component="div">
                                {current.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}