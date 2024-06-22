import React from 'react'
import Bg from '../img/bg.jpg'
const Home = () => {
    return (
        <div className="">
            <div className='BGimg'>
                <img src={Bg} height={100} alt="compound-stack" />
            </div>

            <main className="p-4">
                <p className="text-lg">
                    This is a sample React application styled with Tailwind CSS.
                </p>
            </main>
        </div>
    )
}

export default Home
