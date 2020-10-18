import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import Pusher from "pusher-js";


// 2 composants un menu avec les conversation et une fenêtre de chat

function App() {

  useEffect(() => {
    const pusher = new Pusher('53c801d90ada0b8103b6', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

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
