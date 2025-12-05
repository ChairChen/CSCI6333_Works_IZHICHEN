import './App.css';
// in class practices
import React, { Suspense, lazy } from 'react';
// replaced BrowserRouter with HashRouter to address the 404 error when refreshing pages
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import { FullscreenProvider, useFullscreen } from './context/FullscreenContext';
// import { ApolloProvider } from '@apollo/client/react';
// import { client } from './context/ApolloClientContext';
import Header from './components/Header/Header';
// Lazy load main pages
const Home = lazy(() => import('./pages/Home/Home'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises'));
const Assignments = lazy(() => import('./pages/Assignments/Assignments'));
const Preview = lazy(() => import('./pages/Preview/Preview'));

function AppContent() {
  const { isFullscreen } = useFullscreen();
  return (
    <div className={`App ${isFullscreen ? "fullscreen-mode" : ""}`}>
      <Header />
      <main>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Exercises' element={<Exercises />} />
            <Route path='/Exercises/:exerciseName' element={<Exercises />} />
            <Route path='/Assignments' element={<Assignments />} />
            <Route path='/Assignments/:assignmentName/*' element={<Assignments />} />
            {/* for Assignment03 mini SPA uses */}
            {/* fallback page */}
            <Route path='*' element={<Preview />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return (
    // <ApolloProvider client={client}>
      <ThemeProvider>
        <FullscreenProvider>
          {/* remove basename because HashRouter resolved GitHub Pages 404 error */}
          {/* <Router basename={process.env.PUBLIC_URL}> */}
          <Router>
            <AppContent />
          </Router>
        </FullscreenProvider>
      </ThemeProvider>
    // </ApolloProvider>
  );
}

