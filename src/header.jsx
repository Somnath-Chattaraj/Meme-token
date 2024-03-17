import uranus_token from "./assets/29231.png"
import { Link } from "react-router-dom" 

export default function Header() {
    return (
        <header className="dark:bg-black bg-gray-900 text-white fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center z-10">
    <div className="flex items-center">
        <img src={uranus_token} alt="" className='h-9 w-9 '/>
        <div className="text-white rounded-lg px-3 hover:shadow-lg cursor-pointer text hover:bg-gray-500"><Link to='/' >$URANUS</Link></div>
    </div>
    <div className="flex items-center">
        <Link to='/brown-paper' className="px-4 py-2 bg-white font-bold text-black border text-xs rounded-lg hover:bg-gray-300 mr-2">Brown Paper</Link>
        <button className="px-2 py-2 text-white border text-xs rounded-lg hover:bg-gray-700">Made By Somnath</button>
    </div>
</header>



    )
}