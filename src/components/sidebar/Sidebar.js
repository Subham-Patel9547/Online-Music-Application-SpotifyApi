import React, {useState, useEffect} from 'react'
import './sideBar.css'
import { FaGripfire } from "react-icons/fa";
import SidebarButton from './SidebarButton'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from '../../Spotify';

export default function Sidebar() {

  const [image, setImage] = useState(
    "https://images.app.goo.gl/XbFNjZhjBX59UZPC7"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

    return (
    <div className="sidebar-container">
      {/* Profile Image */}
      <img src={image} alt='profile' className='profile-img'/>
      <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />}/>
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />}/>
        <SidebarButton title='Player' to='/player' icon={<TbPlayerPlayFilled />}/>
        <SidebarButton title='Favorite' to='/Favorite' icon={<MdFavorite />}/>
        <SidebarButton title='Library' to='/' icon={<IoLibrary />}/>
      </div>
      <SidebarButton title='Sign Out' to='/LogOut' icon={<FaSignOutAlt />}/>
    </div>
  )
}
