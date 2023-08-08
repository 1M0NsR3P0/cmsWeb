import { Outlet } from 'react-router-dom'
import './App.css'
import SideNav from './SideNav'
import { useState } from 'react'
import Nav from './Nav';

function App() {
  // cms system with mongodb
  const [width, setWidth] = useState(false);
  const collapseHandle = () => {
    setWidth(!width)
  }
  // 

  return (
    <div className='overflow-hidden'>
      <div className='overflow-hidden'>
        <Nav/>
      </div>
    <div className='app'>
 
      <div className={`sideNav-container fixed ${width ? 'w-[35px]' : ''}`}>
        <SideNav />
        <hr  className='hr'/>
        <button className='flex gap-2 justify-start items-center mt-5' onClick={collapseHandle}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>

          </div>
          <div className={`myBtn ${width && 'hidden'}`} >
            Collpase Menue
          </div>
        </button>
      </div>
      <div className={`outlet-container ${!width? 'ml-[300px]':'pl-[10%]'}`}>
        <div className='outlets'>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
