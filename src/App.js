import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./login"


// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.


// 2 composants un menu avec les conversation et une fenêtre de chat
// axios pour afficher les données JSON
// à chaque Fetch, l'app affiche le dernier message avec le 1er useEffect et messages/sync
// https://pusher.com/docs/channels/using_channels/events

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

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage)); Utiliser pour le message d'alerte
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // dans le tableau précédent, ajouter messages pour faire le cumul

  console.log(messages);

  // const [user, setUser] = useState(null);

  return (
    <div className="app">
        <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
        </div>
      
    </div>
  );
}

export default App;
