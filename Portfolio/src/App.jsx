import React from 'react';
import './App.css';
import Footer from './components/Footer';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  useRoutes,
  Router,
  Routes,
} from "react-router-dom";
import Layout from './components/layer/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './components/Transition';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import { fadeIn } from '../variants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route
      path="/"
      element={<Layout />}
    >
      <Route index element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Service" element={<Service />}></Route>
      <Route path="/Work" element={<Work />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Route>
      </>
  )
);

function App() {
  return (
    <>
      <AnimatePresence mode='wait'>
         <motion.div className="h-full">
          <Transition/>    
         </motion.div> 
      </AnimatePresence>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
