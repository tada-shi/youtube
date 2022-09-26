import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';

const App = () => {
  return (
    // <div>App</div>
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" exact element={<VideoDetail/>}/>
                <Route path="/video/:id" exact element={<ChannelDetail/>}/>
                <Route path="/video/:searchTerm" exact element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App