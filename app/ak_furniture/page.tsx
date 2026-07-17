import React from 'react'
import PreviousWork from '../[components]/PreviousWork'
import Form from '../[components]/Form'
import Navigation from '../[components]/Navigation'

const FurniturePage = () => {
  return (
    <section className='w-full space-y-5'>
        <Navigation />
        <PreviousWork />
        <Form />
    </section>
  )
}

export default FurniturePage