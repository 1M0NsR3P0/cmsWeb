import React, { createContext, useState, useContext } from 'react';
import '../../../src/App.css'
import products from "../../../public/products.json"
import category from "../../../public/category.json"
// Create a new context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [showSetting, setSetting] = useState(false);
  const [showAuthor, setAuthors] = useState(true);
  const [showVideo, setVideo] = useState(true);
  const [showSettingIcon, setSettingIcon] = useState(true);
  const [makeActiveClass, setActiveClass] = useState(false);
  const [makeActiveClass2, setActiveClass2] = useState(false);
  const [makeActiveClass3, setActiveClass3] = useState(false);


  const toggleSetting = () => {
    setSetting(!showSetting);
  };
  const toggleSettingIcon = (value) => {
    setSettingIcon(value)
  };

  const toggleAuthor = () => {
    setAuthors(!showAuthor);
  };

  const toggleVideo = () => {
    setVideo(!showVideo);
  };
  const ToggleLinkActive = ()=>{
    setActiveClass(true)
  }
  const ToggleLinkActive2 = ()=>{
    setActiveClass2(true)
  }
  const ToggleLinkActive3 = ()=>{
    setActiveClass3(true)
  }
  const ToggleFlaseActive = ()=>{
    setActiveClass(false)
    setActiveClass2(false)
    setActiveClass3(false)
  }
  const letter = <div class='h1'> hello there sir, </div>
  const letter2 = "<div class='h1'> hello there sir, </div>"
  const msges = [
    {
        id:1,
        from:"someone1@Mail.com",
        title: "number 1",
        msg: <div>
          sir, <br></br>
          with due respect i want you to know that Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit repellat minus architecto earum dolorem molestias suscipit ea magni, officiis, fugiat ducimus illum! Obcaecati est culpa quo at id asperiores! <br />
          your well wisher,
          <br />
          mr someone1
          <br />
          someone1@mail.com
        </div>,
        read: false
    },
    {
        id:2,
        from:"someone2@Mail.com",
        title: "number 2",
        msg: <div>{letter}</div>,
        read: true
    },
    {
        id:3,
        from:"someone3@Mail.com",
        title: "number 3",
        msg: <div>{letter2}</div>,
        read: false
    },
]
const user = {mail:"me@mail.com",name:"me"}

  // Values that will be available to components
  const contextValues = {
    showSetting,
    toggleSetting,
    showAuthor,
    toggleAuthor,
    showVideo,
    toggleVideo,
    showSettingIcon,
    toggleSettingIcon,
    ToggleLinkActive,
    makeActiveClass,
    ToggleFlaseActive,
    ToggleLinkActive2,
    ToggleLinkActive3,
    makeActiveClass3,
    makeActiveClass2,
    msges,
    products,
    user,
    category,

  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

// A custom hook to access the context
export const useAppContext = () => useContext(AppContext);
