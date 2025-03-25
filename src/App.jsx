import DisplayPosts from './posts/displayPosts'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
        <Navbar />
        <div className="mx-10">
          <DisplayPosts />
        </div>
    </>
  )
}

export default App
