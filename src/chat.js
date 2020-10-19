import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from  'react';
import "./chat.css";
import { IconButton, Avatar } from '@material-ui/core';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic"


function Chat({messages}) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>



                <div className="chat__headerInfo">
                    <h3>Chat name</h3>
                    <p>Last seen at...</p>
                    </div>

                <div className="chat__headerInfoRight">


                    <IconButton>
                    <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                    <AttachFile/>
                    </IconButton>
                    <IconButton>
                    <MoreVert/>
                    </IconButton>
                    </div>
                </div>



            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className ="chat__name">{message.name}</span>
                    {message.message}
                    <span className = "chat__timestamp">{message.timestamp}
                    </span>
                    </p>
                ))}


                    <p className="chat__receiver chat__message">
                    <span className ="chat__name">Wilou</span>
                    This is the message
                    <span className = "chat__timestamp">{new Date().toUTCString()}
                    </span>
                    </p>
            </div>

                    <div className="chat__footer">
                        <InsertEmoticonIcon/>
                        <form>
                            <input placeholder="Type a message" type="text"/>
                            <button type="Submit">Send a message
                            </button>
                        </form>

                        <MicIcon/>
                    </div>


    </div>

    )
}

export default Chat