// src/context/FullscreenContext.js
import React, { createContext, useState, useContext } from 'react';

// 1. Context
const FullscreenContext = createContext({
  isFullscreen: false,
  toggleFullscreen: () => {},
});

// 2. Provider 元件
export const FullscreenProvider = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  return (
    <FullscreenContext.Provider value={{ isFullscreen, toggleFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  );
};

// 3. Hook
export const useFullscreen = () => useContext(FullscreenContext);

export default FullscreenContext;