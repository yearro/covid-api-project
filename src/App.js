import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer'

import GeneralContextProvider from './contexts/GeneralContext'
import CountryContextProvider from './contexts/CountryContext'


const Home = lazy (() => import('./pages/Home'))
const NotFound = lazy (() => import('./pages/404'))
const Contact = lazy (() => import( './pages/Contact'))
const AboutUs = lazy (() => import( './pages/AboutUs'))
const ByCountry = lazy (() => import('./pages/Country'))

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <GeneralContextProvider>
              <Home />
            </GeneralContextProvider>
          
          } />
          <Route path="/:slug/country" element={
            <CountryContextProvider>
              <ByCountry />
            </CountryContextProvider>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
