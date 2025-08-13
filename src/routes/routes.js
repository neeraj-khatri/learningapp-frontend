import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import About from '../About';
import Dashboard from '../Dashboard';
import Navbar from '../Navbar';
import LoginPage from '../page/loginPage';
import SignupPage from '../page/signupPage';
import CounterPage from '../page/counter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <SignupPage />
      </>
    ),
  },
  {
    path: '/counter',
    element: (
      <>
        <Navbar />
        <CounterPage />
      </>
    ),
  },
]);

export default router;
