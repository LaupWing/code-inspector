import {useState} from 'react'
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'

const Home = () => {
   const [joinRoom, setJoinRoom] = useState(false)
   const [createRoom, setCreateRoom] = useState(false)

   return (
      <div className="m-auto w-80 flex flex-col rounded overflow-hidden bg-white h-40 shadow">
         <h2 className="p-2 bg-indigo-500 text-white uppercase tracking-wider">
            {joinRoom ? 'Join Room' : createRoom ? 'Create Room' : 'Choose'}
         </h2>
         {(!joinRoom && !createRoom) && <div className="m-auto">
            <button 
               className="bg-indigo-500 rounded-full mr-2 w-28 capitalize py-0.5 text-white"
               onClick={()=>setJoinRoom(true)}
            >
               Join Room
            </button>
            <button 
               className="bg-indigo-500 rounded-full w-28 capitalize py-0.5 text-white"
               onClick={()=>setCreateRoom(true)}
            >
               Create Room
            </button>
         </div>}
         {createRoom && 
            <CreateRoom
               setCreateRoom={setCreateRoom}
            />
         }
         {joinRoom && 
            <JoinRoom
               setJoinRoom={setJoinRoom}
            />
         }
      </div>
   )
}

export default Home
