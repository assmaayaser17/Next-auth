'use client';

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'

export default function client() {

   const{data , status , update}=useSession({
    required: true,
    onUnauthenticated(){
      redirect('/api/auth/signin')
    },
    
   });

   console.log("session data",data);
  return (
    <>
     <div className='container p-5 m-5 mx-auto w-1/2 bg-gray-400 shadow-inner flex justify-center items-center '>


<h1 className='text-rose-900 font-bold text-3xl'>HELLO CLIENT SIDE</h1>


</div>
    
    </>
  )
}
