import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-base text-white text-3xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-8 capitalize  '>
        Hello Vite!
      </h1>
      <h1 className='text-yellow-600 bg-[#bada55] mb-1 border-4 border-green-600'>
        Hello Vite!
      </h1>
      <h1 className= 'text-vuejs-100  uppercase text-regular border-4 border-green-600 text-sm md:text-3xl lg:text-lg'>
        Hello Vite!
      </h1>
      <p className='text-sm'>hellow world</p>
    <p className='truncate'> this is along sentece wil truncate.th very god gave me opportuity and i think i should try it</p>
    </>
  )
}

export default App
