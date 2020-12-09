import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
function App() {

  //useEffect permette di avviare del codice quando si avvia il componente
  useEffect(() => {
      const pusher = new Pusher('162ddb30fccd26320c0b', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
       
    </div>
  );
}

export default App;
