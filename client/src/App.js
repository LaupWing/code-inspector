import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Editor from './pages/Editor'

function App() {
   fetch('http://localhost:5000')
      .then(async test=>{
         const json = await test.json()
         console.log(json)
      })
   return (
      <div className="flex w-screen h-screen bg-gray-800">
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/editor" element={<Editor/>}/>
         </Routes>
      </div>
   );
}

export default App;