import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-white'>
        Hello Vite!
      </h1>
      <h1 className='text-yellow-600 bg-[#bada55] mb-1 border-4 border-green-600'>
        Hello Vite!
      </h1>
      <h1 className= 'text-vuejs-100  border-4 border-green-600 text-sm md:text-3xl lg:text-lg'>
        Hello Vite!
      </h1>
    
    </>
  )
}

export default App
