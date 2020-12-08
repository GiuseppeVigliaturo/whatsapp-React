import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton, Avatar} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar></Avatar>
                
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                        <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>  
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined></SearchOutlined>
                    <input type="text"/>
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
