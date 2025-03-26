import DisplayPosts from './posts/displayPosts'
import Navbar from './components/Navbar'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginForm from './users/loginForm'

function App() {

  return (
    <>
        <Navbar />
        <div className="mx-10">
          <Routes>
            <Route path="/" element={<DisplayPosts />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </div>
    </>
  )
}

export default App
