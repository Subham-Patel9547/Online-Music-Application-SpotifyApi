import React from 'react'
import './sidebarButton.css'
import {Link,useLocation} from 'react-router-dom'

function SidebarButton(props) {
  const location=useLocation();
  const isActive=location.pathname===props.to;
  const btnClass=isActive?"btn-body active":"btn-body";

  return (
    <Link to={props.to}>
    <div className={btnClass}>
      {props.icon}
      <p className='btn-title'>{props.title}</p>
    </div>
    </Link>
  )
}

export default SidebarButton