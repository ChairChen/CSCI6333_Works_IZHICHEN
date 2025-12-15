import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import GlobalToastContainer from './components/GlobalToastContainer';

// Lazy load main pages
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const ReduxTodo = lazy(() => import('./pages/ReduxTodo/ReduxTodo'));
const CRUD = lazy(() => import('./pages/CRUD/CRUD'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Preview = lazy(() => import('./pages/Preview/Preview'));

export default function App() {
  return (
    <ToastProvider>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Router>
            <div className="App">
              <Header />
              <main>
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/ReduxTodo' element={<ReduxTodo />} />
                    <Route path='/CRUD' element={<CRUD />} />
                    <Route path='/Gallery' element={<Gallery />} />
                    <Route path='*' element={<Preview />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
          </Router>
        </ThemeProvider>
      </ReduxProvider>

      <GlobalToastContainer />
    </ToastProvider>
  );
}

