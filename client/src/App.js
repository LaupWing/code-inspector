import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Editor from './pages/Editor'
import {io} from 'socket.io-client'

// client-side
// socket.on("connect", () => {
   //    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
   //  });
   
const socket = io('http://localhost:5000', { transports : ['websocket'] })
function App() {
   console.log(socket)
   return (
      <div className="flex w-screen h-screen bg-gray-800">
         <Routes>
            <Route 
               socket={socket}
               path="/" 
               element={<Home/>}
            />
            <Route path="/editor" element={<Editor/>}/>
         </Routes>
      </div>
   );
}

export default App;