// import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
   // const [state, setstate] = useState(false)
   
   return (
      <div className="flex w-screen h-screen bg-gray-800">
         <Routes>
            <Route path="/" element={<Home/>}/>
         </Routes>
      </div>
   );
}

export default App;