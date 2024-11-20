
import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/route';
import  {redirect  }from 'next/navigation';



export default async function server() {
    const session= await getServerSession(options);

    if(!session)  redirect  ('/api/auth/signin')

    console.log(session)
  return (
    <>

    <div className='container p-5 m-5 mx-auto w-1/2 bg-gray-400 shadow-inner flex justify-center items-center '>


      <h1 className='text-rose-900 font-bold text-3xl'>HELLO SERVER SIDE</h1>


    </div>
    
    </>
  )
}
