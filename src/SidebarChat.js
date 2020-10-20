import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";

// useEffect lance du code lorsqu'il y a le chargement d'un composant

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter a name for the chatroom");
        if (roomName) {
            //
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src = {`https://avatars.dicebear.com/api/female/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This the last message</p>
            </div>
        </div>
    ): (
        <div className="sidebarChat" onClick = {createChat}>
            <h2> Add new chat </h2>
        </div>
    )
};

export default SidebarChat

