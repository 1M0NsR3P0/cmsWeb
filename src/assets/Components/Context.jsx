import React, { createContext, useState, useContext } from 'react';
import '../../../src/App.css'
// Create a new context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [showSetting, setSetting] = useState(false);
  const [showAuthor, setAuthors] = useState(true);
  const [showVideo, setVideo] = useState(true);
  const [showSettingIcon, setSettingIcon] = useState(true);
  const [makeActiveClass, setActiveClass] = useState(false);


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
  const ToggleFlaseActive = ()=>{
    setActiveClass(false)
  }

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
    ToggleFlaseActive

  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

// A custom hook to access the context
export const useAppContext = () => useContext(AppContext);
