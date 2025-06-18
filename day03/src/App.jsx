import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Topics from './components/Topics'
import './App.css'
import ReactButton from './components/ReactButton'

function App() {
   return (
      <>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
               {/* <Link to="/">Home</Link> */}
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
               {/* <Link to="/topics">Topics</Link> */}
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
               {/* <Link to="/contact">Contact</Link> */}
            </li>
            <li>
               <NavLink to="/button">Button</NavLink>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ReactButton />} />
            <Route path="/topics/:topicId" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </>
   )
}

export default App
