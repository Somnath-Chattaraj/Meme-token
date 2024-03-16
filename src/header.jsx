import uranus_token from "./assets/29231.png"

export default function Header() {
    return (
        <header className="dark:bg-black bg-gray-900 text-white fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center z-10">
    <div className="flex items-center">
        <img src={uranus_token} alt="" className='h-7 w-7 '/>
        <div className="text-white rounded-lg px-3  hover:shadow-lg cursor-pointer text-sm hover:bg-gray-900">$URANUS</div>
    </div>
    <button className="px-4 py-2  text-white border text-xs rounded-lg hover:bg-gray-700">Made By Somnath</button>
</header>


    )
}