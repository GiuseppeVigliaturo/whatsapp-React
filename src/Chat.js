import React from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons';
import {IconButton, Avatar} from '@material-ui/core';
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar></Avatar>
                <div className="chat__headerInfo">
                    <h2>Nome utente</h2>
                    <p>Ultimo messagio</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                        <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>  
                </div>
            </div>

            <div className="chat__body">

                <p className="chat__message">
                    <span className="chat__name">
                        Giuseppe
                    </span>
                    Messaggio
                    <span className="chat__timestamp">
                        {new Date().toDateString()}
                    </span>
                </p>

                 <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Giuseppe
                    </span>
                    Messaggio
                    <span className="chat__timestamp">
                        {new Date().toDateString()}
                    </span>
                </p>

            </div>

            <div className="chat__footer">
                <InsertEmoticon></InsertEmoticon>
                <form>
                    <input placeholder="Write a message.." type="text">
                    </input>
                    <button type="submit">
                        Send 
                    </button>
                </form>
                <Mic></Mic>
            </div>
        </div>
    )
}

export default Chat
