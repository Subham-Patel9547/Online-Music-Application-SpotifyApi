import React, { useEffect, useState } from 'react'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Trending from '../trending/Trending'
import Player from '../player/Player'
import Favorite from '../favorite/Favorite'
import Sidebar from  '../../components/sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Auth/Login'

import './home.css'
import { setClientToken } from '../../Spotify'
import LogOut from '../logOut/LogOut'

function Home() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : ( 
    // <Login />
    <BrowserRouter>
      <div className="main-Div">
        <Sidebar/>
        <Routes>    
                <Route path='/' element={<Library/>} />
                <Route path='Feed' element={<Feed/>}/>
                <Route path='Trending' element={<Trending/>} />
                <Route path='Player' element={<Player/>}/>
                <Route path='Favorite' element={<Favorite/>} />
                <Route path='LogOut' element={<LogOut/>} token={token}/>
        </Routes>
      </div>       
    </BrowserRouter>
  );
}

export default Home