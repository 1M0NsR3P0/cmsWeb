import { Outlet } from 'react-router-dom'
import './App.css'
import SideNav from './SideNav'
import { useEffect, useState } from 'react'
import Nav from './Nav';

function App() {
  // cms system with mongodb
  const [cookies, setCookies] = useState(false)
  // alert(localStorage.getItem('cookies'))
  const [width, setWidth] = useState(false);
  const collapseHandle = () => {
    setWidth(!width)
  }

  const cookiesAcceptedHandle = () => {
    const currentDate = new Date();
    const savedDate = Date.parse(currentDate.toString().split(' GMT')[0].slice(0, -3));
    localStorage.setItem('cookiesAccepted', savedDate)
    const today = currentDate
    const todayNumeric = Date.parse(today)
    // alert(Math.floor(willShow / (1000 * 60 * 60 * 24)))
    const willShow = Math.floor(todayNumeric - savedDate / (1000 * 60 * 60 * 24));
    if (willShow >= 1) {
      localStorage.setItem('cookies', true)
      if (JSON.parse(localStorage.getItem('cookies')) === true) {
        setCookies(true)
      }
    }
  }
  const hideCookies = ()=>{
    if(JSON.parse(localStorage.getItem('cookies'))===true){
      document.getElementById('cookies-container').classList.add('hidden')
    }
  }
  useEffect(() => {
    const currentDate = new Date();
    const savedDate = currentDate.toString().split(' GMT')[0].slice(0, -3);
    const cookie = localStorage.getItem('cookies');
    if (cookie) {
      cookiesAcceptedHandle()
    }
    else {
      localStorage.setItem('cookies', false)
      localStorage.setItem('cookiesAccepted', savedDate)
      cookiesAcceptedHandle()
    }


  }, [])


  return (
    <div className='overflow-hidden'>
      <div className='overflow-hidden'>
        <Nav />
      </div>
      <div className='app'>

        <div className={`sideNav-container fixed ${width ? 'w-[35px]' : ''}`}>
          <SideNav />
          <hr className='hr' />
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
        <div className={`outlet-container ${!width ? 'ml-[300px]' : 'pl-[10%]'}`}>
          <div className={`fixed ml-[15%] z-30 bottom-[2%] left-[2%] w-[80%] ${cookies ? "block" : "hidden"}`} id='cookies-container'>
            <div className='cookies'>
              <span onClick={''} className='text-[1.3rem] btn absolute right-2 top-1'>&#10060;</span>
              <h1>hellow user!</h1>
              <p>
                As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.
              </p>
            </div>
          </div>
          <div className='outlets'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
