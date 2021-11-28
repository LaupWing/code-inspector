import {useState} from 'react'

const JoinRoom = ({setJoinRoom, socket}) => {
   const [value, setValue] = useState('') 
   const [error, setError] = useState('') 

   socket.on('room not found', ()=>{
      console.log('not found')
      console.log('heh')
   })
   const joinRoom = ()=>{
      socket.emit('join room', value)
   }

   return (
      <div className="m-auto w-full p-2 flex flex-col">
         <input 
            type="text" 
            value={value}
            onChange={e=> setValue(e.target.value)}
            className="bg-gray-300 w-full p-2 py-1 rounded focus:outline-none" 
            placeholder="Join a room!"
         />
         <p className="p-1 text-red-500 text-xs font-bold uppercase">
            {error}
         </p>
         <div className="flex m-auto mt-3">
            <button 
               className="border-indigo-500 border-2 text-indigo-500 rounded-full mr-2 w-28 capitalize py-0.5"
               onClick={()=>setJoinRoom(false)}
            >
               cancel
            </button>
            <button 
               className="bg-indigo-500 rounded-full w-28 capitalize py-0.5 text-white"
               onClick={joinRoom}
            >
               join
            </button>
         </div>
      </div>
   )
}

export default JoinRoom
