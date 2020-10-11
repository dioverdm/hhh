import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from  'react';
import "./chat.css";
import { IconButton, Avatar } from '@material-ui/core';


function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>



                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                    </div>

                <div className="chat__headerInfoRight"></div>


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
    )
}

export default Chat