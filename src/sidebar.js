import React from  'react';
import "./sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat'


function Sidebar() {
    return (
        <div className ="sidebar">
            <div className = "sidebar__header">
                <Avatar src ="https://user-images.githubusercontent.com/64305892/95625393-b725e780-0a78-11eb-936b-e035be8d12d7.jpg"/>
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

            <div className = "sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder = "Search or start new chat" type = "text" />
                </div>
            </div>
            <div className="sidebar__chats">
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>

            </div>
        </div>
    )
}

export default Sidebar