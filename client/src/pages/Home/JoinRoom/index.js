import React from 'react'

const JoinRoom = () => {
   return (
      <div className="m-auto w-full p-2 flex flex-col">
         <input 
            type="text" 
            className="bg-gray-300 w-full p-2 py-1 rounded" 
            placeholder="Join a room!"
         />
         <div className="flex m-auto mt-3">
            <button 
               className="border-indigo-500 border-2 text-indigo-500 rounded-full mr-2 w-28 capitalize py-0.5"
            >
               cancel
            </button>
            <button 
               className="bg-indigo-500 rounded-full w-28 capitalize py-0.5 text-white"
            >
               join
            </button>
         </div>
      </div>
   )
}

export default JoinRoom
