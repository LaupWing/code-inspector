import {useState} from 'react'

const CreateRoom = ({setCreateRoom}) => {
   const [value, setValue] = useState('') 
   const [error, setError] = useState('') 

   const createRoom = () =>{
      if(!value){
         setError('You have to fill in something!')
      }else{
         
      }
   }

   return (
      <div className="m-auto w-full p-2 flex flex-col">
         <input 
            type="text" 
            value={value}
            onChange={e=> setValue(e.target.value)}
            className="bg-gray-300 w-full p-2 py-1 rounded focus:outline-none" 
            placeholder="Create a room!"
         />
         <p className="p-1 text-red-500 text-xs font-bold uppercase">
            {error}
         </p>
         <div className="flex m-auto">
            <button 
               className="border-indigo-500 border-2 text-indigo-500 rounded-full mr-2 w-28 capitalize py-0.5"
               onClick={()=>setCreateRoom(false)}
            >
               cancel
            </button>
            <button 
               className="bg-indigo-500 rounded-full w-28 capitalize py-0.5 text-white"
               onClick={createRoom}
            >
               create
            </button>
         </div>
      </div>
   )
}

export default CreateRoom
