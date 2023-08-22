import { Outlet } from 'react-router-dom'
import './App.css'
import SideNav from './SideNav'
import { useEffect, useState } from 'react'
import Nav from './Nav';

function App() {
  // TODO : cms system with mongodb
  const [cookies, setCookies] = useState(false)
  const [width, setWidth] = useState(false);

  const collapseHandle = () => {
    setWidth(!width)
  }

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toString().split(' GMT')[0].slice(0, -3);
    const savedDate = Date.parse(formattedDate)
    const cookie = localStorage.getItem('cookiesAccepted');
    if (cookie) {
      cookiesAcceptedHandle(savedDate)
    }
    else {
      localStorage.setItem('cookies', false)
      localStorage.setItem('cookiesAccepted', Date.parse(savedDate))
      if (cookie) {
        cookiesAcceptedHandle(savedDate)
      }
    }
    
  }, [])

  const resetMe = ()=>{
    localStorage.setItem('cookies',false);
    localStorage.setItem('cookiesAccepted',0)
  }
  const cookiesAcceptedHandle = (saved) => {
    const today = new Date();
    const formattedDate = today.toString().split(' GMT')[0].slice(0, -3);
    // const formattedDate = "Tue Nov 18 2023 22:03"
    const todayNumeric = Date.parse(formattedDate)
    
    const result = Math.floor(todayNumeric - parseInt(saved));
    const willShow = Math.floor(result / (1000 * 60 * 60 * 24));
    // alert(willShow)
    localStorage.setItem('cookiesAccepted',willShow)
    
    if(willShow>=1 && JSON.parse(localStorage.getItem('cookies'))===true){
      setCookies(true)
    }
    if(willShow>=1){
      localStorage.setItem('cookies',true)
    }

  }
  const accepTed = () => {
    if (JSON.parse(localStorage.getItem('cookies')) === true) {
      localStorage.setItem('cookies', true)
      hideCookies()
      resetMe()
    }
  }

  const showCookies = () => {

    if (JSON.parse(localStorage.getItem('cookies')) === true) {
      localStorage.setItem('cookies', false)
    }
    else if (JSON.parse(localStorage.getItem('cookies')) === false) {
      localStorage.setItem('cookies', true)
    }

  }
  const hideCookies = () => {
    // document.getElementById('cookies-container').classList.add('hidden')
    setCookies(false)
    if (JSON.parse(localStorage.getItem('cookiesAccepted')) <= 1) {
    }
  }



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
              <span onClick={hideCookies} className='text-[1.3rem] btn absolute right-2 top-1'>&#10060;</span>
              <span onClick={accepTed} className='text-[1.3rem] btn btn-xs absolute right-2 bottom-1'>ok</span>
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
