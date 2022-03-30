import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material/node_modules/@mui/system';
import { theme } from '../theme';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../features/main/main.thunks";

export default function Search() {

    const dispatch = useDispatch();

    const update = (e) => {
        dispatch(updateSearchQuery(e.target.value))
    }

    return (
        <Box>
            <AppBar position="fixed" >
                <Toolbar sx={{height: theme.spacing(10)}}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", color:theme.palette.primary.main }} >
                        <div>
                            <IconButton aria-label="search">
                                <SearchIcon sx={{color: theme.palette.primary.main}} fontSize='large' />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 12,  padding: theme.spacing(1.3), paddingRight:theme.spacing(12), borderRadius: theme.spacing(2) , color: theme.palette.primary.dark, background: theme.palette.primary.main }}
                                placeholder="See your financial report"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(event)=>{
                                    update(event)
                                }}
                            />
                        </div>
                        <Typography variant="h5" sx={{paddingTop: theme.spacing(1)}} >
                            Varlyq Task
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ marginBottom: theme.spacing(15) }} />
        </Box>
    );
}