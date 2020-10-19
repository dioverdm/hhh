import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import Pusher from "pusher-js";
import axios from "./axios"


// 2 composants un menu avec les conversation et une fenêtre de chat
// axios pour afficher les données JSON
// à chaque Fetch, l'app affiche le dernier message avec le 1er useEffect et messages/sync

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
        setMessages(response.data);
      });
  }, []);


  useEffect(() => {
    const pusher = new Pusher('53c801d90ada0b8103b6', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);


  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">


   
    <Sidebar />



    <Chat />




    </div>
    </div>
  );
}

export default App;
