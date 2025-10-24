import React from 'react'
import Link from 'next/link'
export const Home = () => {
  return (
    <div className='w-screen h-screen bg-pink-100 text-9xl flex flex-row justify-center items-center'>
        <Link href="/dashboard">Click Here to go to the dashboard</Link>
    </div>
  )
}

export default Home;