import {useState} from 'react'

function App() {
   const [state, setstate] = useState(false)
   
   return (
      <div className="flex w-screen h-screen bg-gray-800">
         <div className="m-auto w-80 flex flex-col rounded overflow-hidden bg-white h-36 shadow">
            <h2 className="p-2 bg-indigo-500 text-white uppercase tracking-wider">Room</h2>
            <div className="m-auto">
               <button className="bg-indigo-500 rounded-full mr-2 w-28 capitalize py-0.5 text-white">Join Room</button>
               <button className="bg-indigo-500 rounded-full w-28 capitalize py-0.5 text-white">Create Room</button>
            </div>
         </div>
      </div>
   );
}

export default App;