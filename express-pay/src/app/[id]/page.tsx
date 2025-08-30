import React from 'react'
import { Details } from '../Details';

export default async function Page({ params }: { params: { id: number } }) {

  const id = await params.id
  console.log('params:', params)

  return (
   <main>
    <Details id={id} />
   </main>
   
  )
}
