import { useNavigate } from "react-router-dom"
import {logout } from '../users/userSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function Navbar() {
    const {user, isVerified} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    return (
        <div className="flex w-full flex-row bg-red-300 min-h-6 py-3">
            <nav className="flex w-full mx-2 justify-between">
                <h1 className="text-5xl">Dbaxx Blogs</h1>
                {isVerified ? 
                <div className="flex justify-around items-center mr-3 w-[15vw] max-w-[240px]">
                    <button className="border-[1.2px] border-green-300 py-2 px-4 rounded-xl" type="button" onClick={handleLogout}>Sign Out</button>
                    <p id="username">{user}</p>
                </div> :
                <div className="flex justify-around items-center mr-3 w-[15vw] max-w-[240px]">
                    <button className="border-[1.2px] border-green-300 py-2 px-4 rounded-xl" type="button" onClick={() => navigate("/login")}>Sign In</button>
                    <p id="username">Guest</p>
                </div>
                }
            </nav>
        </div>
    )
}