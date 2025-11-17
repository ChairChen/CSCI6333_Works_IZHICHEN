import './App.css';
// in class practices
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import Header from './components/Header/Header';
// Lazy load main pages
const Home = lazy(() => import('./pages/Home/Home'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises'));
const Assignments = lazy(() => import('./pages/Assignments/Assignments'));
const Preview = lazy(() => import('./pages/Preview/Preview'));

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
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
      </Router>
    </ThemeProvider>
  );
}

