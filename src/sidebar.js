import React from  'react';
import "./sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Sidebar() {
    return (
        <div className ="sidebar">
        <div className = "sidebar__header">
            <Avatar/>
            <div className="sidebar__headerRight">
                <IconButton>
                 <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                 <ChatIcon/>
                </IconButton>
                <IconButton>
                 <MoreVertIcon/>
                </IconButton>
            </div>
        </div>

        </div>
    )
}

export default Sidebar